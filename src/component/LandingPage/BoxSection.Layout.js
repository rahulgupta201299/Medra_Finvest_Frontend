import React from 'react';
import { Box, Tooltip, Typography, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import BoxContainer from './BoxContainer.Layout';
import { ROUTES } from '../../Route/Routes.constants';

const useStyles = makeStyles(() => ({
	bondContainer: {
		backgroundColor: '#0C2D48',
		padding: '2rem',
		height: '23rem',
		'@media screen and (max-width: 899px)': {
			padding: '1.5rem',
		},
		'@media screen and (max-width: 500px)': {
			padding: '1rem',		
		},
	},
	bondTitle: {
		color: '#FFF',
		fontSize: '2.5rem',
		fontWeight: 700,
		marginBottom: '2rem',
		'@media screen and (max-width: 899px)': {
			fontSize: '2rem',
		},
		'@media screen and (max-width: 500px)': {
			fontSize: '1.5rem',	
		},
	},
	bondGridFormat: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: '3rem',
		overflowX: 'scroll',
		width: 'calc(100% - 4rem)',
		'@media screen and (max-width: 899px)': {
			width: 'calc(100% - 3rem)',
		},
		'@media screen and (max-width: 500px)': {
			width: 'calc(100% - 2rem)',
		},
		'&::-webkit-scrollbar': { 
			width: 0, 
		}
	},
	iconStyle: {
		color: '#00FF00',
		cursor: 'pointer',
		marginTop: '8px',
		'@media screen and (max-width: 899px)': {
			marginTop: '0',
		}
	}
}));

const bondData = [
	{
		name: 'FULLERTON INDIA',
		type: 'AAA',
		details: [
			{
				key: 'Maturity Date',
				value: '13-Oct-2025',
			},
			{
				key: 'Payments',
				value: 'Yearly',
			},
			{
				key: 'Yield',
				value: '8.27%',
			},
			{
				key: 'Min. Investment',
				value: '1000000',
			},
		],
	},
];

const BoxSection = () => {

  const classes = useStyles();
  const navigate = useNavigate();

  return (
	<Box className={classes.bondContainer}>
		<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
			<Typography className={classes.bondTitle}>
				High Demand Bonds
			</Typography>
			<Tooltip title="SEE MORE">
				<DoubleArrowIcon 
					className={classes.iconStyle}
					onClick={() => navigate(ROUTES.BONDS)}
					fontSize="large"
				/>
			</Tooltip>
		</Box>
		<Box className={classes.bondGridFormat}>
			<BoxContainer data={bondData} />
			<BoxContainer data={bondData} />
			<BoxContainer data={bondData} />
			<BoxContainer data={bondData} />
			<BoxContainer data={bondData} />
		</Box>
	</Box>
  )
}

export default BoxSection;

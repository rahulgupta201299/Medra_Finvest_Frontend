import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import BusinessLoanImg from '../../assets/BusinessLoanImg.jpg';
import { ROUTES } from '../../Route/Routes.constants';

const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: '#fdfdfd',
		padding: '1.5rem',
		paddingLeft: '1.5rem',
		'@media screen and (max-width: 700px)': {
			padding: '1.5rem',
		},
	},
	header: {
		fontSize: '2.5rem',
		fontWeight: 700,
		marginBottom: '2rem',
		'@media screen and (max-width: 899px)': {
			fontSize: '2rem',
		},
		'@media screen and (max-width: 500px)': {
			fontSize: '1.5rem',	
		},
		'@media screen and (max-width: 330px)': {
			fontSize: '1.2rem',	
		},
	},
	icdContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		'@media screen and (max-width: 899px)': {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	imgStyle: {
		width: '50%',
		'@media screen and (max-width: 899px)': {
			width: '60%',
		},
		'@media screen and (max-width: 600px)': {
			width: '70%',
		},
		'@media screen and (max-width: 500px)': {
			width: '90%',
		},
	},
	icdDetails: {
		backgroundColor: '#FFCE66',
		width: '100%',
		height: '300px',
		margin: 'auto',
		borderRadius: '1rem',
		padding: '1.5rem',
		'@media screen and (min-width: 1050px)': {
			width: '500px',
		},
		'@media screen and (max-width: 899px)': {
			width: '60%',
			height: 'auto',
			marginTop: '1rem',
		},
		'@media screen and (max-width: 700px)': {
			width: '80%',
		},
		'@media screen and (max-width: 550px)': {
			width: '90%',
		},
		'@media screen and (max-width: 450px)': {
			padding: '1rem',
			width: '90%',
			fontSize: '0.6rem',
		},
	},
	icdNestedStyle: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '0.5rem',
	},
	icdTextStyle: {
		'@media screen and (max-width: 450px)': {
			fontSize: '0.9rem',
		},
		'@media screen and (max-width: 340px)': {
			fontSize: '0.8rem',
		},
	},
	btnStyle4: {
		margin: 'auto',
		marginTop: '2rem',
		display: 'flex',
		fontWeight: 700,
		padding: '0.5rem 1.5rem',
		textTransform: 'capitalize',
		borderRadius: '8px',
		cursor: 'pointer',
		letterSpacing: '1px',
		color: '#FFF',
		backgroundColor: '#474ebb',
	},
}));

const ICDContainer = () => {

  const [hover, setHover] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const IcdData = [
	{
		key: 'Min Tenure',
		value: '6 Months',
	},
	{
		key: 'Max Tenure',
		value: '1 Year 6 Months',
	},
	{
		key: 'Rate Of Interest',
		value: '12-16%',
	},
	{
		key: 'Total Cumulative Experience',
		value: '30+ Years',
	},
	{
		key: 'AUM',
		value: '1 cr',
	}
]

  return (
	  <Box className={classes.container}>
		<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
			<Typography className={classes.header}>
				InterCorporate Deposit
			</Typography>
		</Box>
		<Box className={classes.icdContainer}>
			<img className={classes.imgStyle} src={BusinessLoanImg} alt="Business Loan" />
			<Box className={classes.icdDetails}>
				<Typography style={{ fontSize: '1.3rem', fontWeight: 600 }}>
					Business Loan
				</Typography>
				<Box style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
					{
						IcdData.map((item, ind) => (
							<Box key={ind} className={classes.icdNestedStyle}>
								<Typography className={classes.icdTextStyle} style={{ fontWeight: 500, color: '#696969' }}>
									{item.key}
								</Typography>
								<Typography className={classes.icdTextStyle} style={{ fontWeight: 700 }}>
									{item.value}
								</Typography>
							</Box>
						))
					}
				</Box>
				<Button
					style={{ backgroundColor: hover && '#A32EFF', opacity: hover && 0.8, color: hover && '#000' }}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					onClick={() => navigate(ROUTES.INTER_CORPORATE_BONDS)}
					className={classes.btnStyle4}
				>
					Explore Now
				</Button>
			</Box>
		</Box>
	</Box>
  )
}

export default ICDContainer;

import React, { useState } from 'react';
import ReadFromExcel from './ReadFromExcel';
import {Tabs,  Tab} from '@mui/material';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ICDInput from './ICDInput.Layout.js';
import BackDrop from '../common/BackDrop';

const useStyles = makeStyles(() => {
	return {
		tabsContainer: {
			position: 'fixed',
			height: '100vh',
			overflowY: 'scroll',
			width: '30%',
			backgroundColor: '#DEDEDE',
			'@media screen and (max-width: 899px)': {
				position: 'relative',
				width: '100%',
				height: '0',
			}
		},
		container: {
			display: 'flex',
			flexDirection: 'row',
			'@media screen and (max-width: 899px)': {
				flexDirection: 'column',
			}
		},
		itemContainer: {
			marginLeft: '30%',
			width: '100%',
			padding: '1rem',
			'@media screen and (max-width: 899px)': {
				marginLeft: 0,
			},
		},
		header: {
			fontSize: "2.25rem",
			marginTop: '1rem',
			lineHeight: '2.6rem',
			color: "#282828",
			fontWeight: 700,
			marginBottom: '2rem',
			lineHeight: '2rem',
			'@media screen and (max-width: 499px)': {
				fontSize: "2rem",
				marginBottom: '1.5rem',
			},
			'@media screen and (max-width: 399px)': {
				fontSize: "1.5rem",
				marginBottom: '1rem',
			}
		},
		textStyle: {
			fontWeight: 500,
			fontSize: '1rem',
			marginLeft: '37%',
			'@media screen and (max-width: 899px)': {
				marginLeft: '35%',
			},
			'@media screen and (max-width: 650px)': {
				marginLeft: '30%',
			},
			'@media screen and (max-width: 500px)': {
				marginLeft: '20%',
			},
			'@media screen and (max-width: 400px)': {
				marginLeft: '8%',
			},
			'@media screen and (max-width: 360px)': {
				marginLeft: '0',
			},
		},
		btnStyle: {
			marginTop: '2.5rem',
			borderRadius: '8px',
			padding: '10px',
			fontWeight: 700,
			margin: '0 auto',
			display: 'flex',
		}
	}
});

const profileData = [
	{
		key: 'Name',
		value: 'RAHUL GUPTA',
	},
	{
		key: 'Email',
		value: 'rahulgupta201299@gmail.com',
	},
	{
		key: 'Mobile No',
		value: '+91 - 9163277940',
	}
]

const Profile = () => {
  const [value, setValue] = useState('Profile');
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
		<BackDrop open={loading} />
		<Box className={classes.container}>
			<Tabs
				className={classes.tabsContainer}
				value={value}
				onChange={handleChange}
				variant="scrollable"
				orientation = {window.innerWidth < 900 ? 'horizontal' : 'vertical' }
			>
				<Tab
					style={{ 
						fontWeight: 700,
						marginTop: window.innerWidth < 900 ? '0' : '30px',
						marginLeft:  window.innerWidth < 900 ? 'auto' : '0'
					}}
					value="Profile"
					label="Profile"
				/>
				<Tab 
					style={{ fontWeight: 700 }} 
					value="Bonds" 
					label="Bonds"
				/>
				<Tab 
					style={{ 
						fontWeight: 700,
						marginRight: window.innerWidth < 900 ? 'auto' : '0',
					}} 
					value="ICD" 
					label="ICD"
				/>
			</Tabs>
			<Box className={classes.itemContainer}>
				{
					value === 'Profile' && (
						<Box>
							<Typography className={classes.header}>
								Profile Details
							</Typography>
							<AccountCircleIcon 
								style={{ 
									margin: '0 auto',
									width: '200px', 
									height: '200px',
									color: '#999999',
									display: 'flex',
									margin: 'auto',
									marginBottom: '50px',
								}}
							/>
							{
								profileData?.map((item, ind) => (
									<p className={classes.textStyle}>
										<span style={{ fontWeight: 700, color: '#0000FF' }}>
											{item.key}:
										</span> &nbsp; {item.value}
									</p>
								))
							}
							<Button
								style={{ 
									backgroundColor: hover ? '#FF5C5C' : '#FF0000',
									color: hover ? '#282828' : '#FFF',
								}}
								className={classes.btnStyle}
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
							>
								Sign Out
							</Button>
						</Box>
					)
				}
				{
					value === 'Bonds' && (
						<Box>
							
							<Typography className={classes.header}>
								Update the Bond Sheet
							</Typography>
							<ReadFromExcel setLoading={setLoading} />
						</Box>
					)
				}
				{
					value === 'ICD' && (
						<Box>
							<Typography className={classes.header}>
								Update the ICD Value's
							</Typography>
							<ICDInput />
						</Box>
					)
				}
			</Box>
		</Box>
	</Box>
  );
}

export default Profile;

import React, { useState } from 'react'
import Typical from 'react-typical'
import { Button, Box, Typography, Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { ROUTES } from '../../Route/Routes.constants';
import LandingImg from '../../assets/LandingPageImg.png';
import Rank1 from '../../assets/Rank1.png';
import LowRiskIcon from '../../assets/LowRiskIcon.png';
import SystemUpdate from '../../assets/SystemUpdate.png';
import ReturnOnInvestment from '../../assets/ReturnOnInvestment.png';
import { BondDetails, learnAboutBondsData, meetOurTeam  } from '../common/Data.constant';
import BoxSection from './BoxSection.Layout';

const useStyles = makeStyles(theme => ({
    upperContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '3rem',
		'@media screen and (max-width: 899px)': {
			flexDirection: 'column-reverse',
			margin: '0 auto',
			alignItems: 'center',
			gap: '3rem',			
		},
		'@media screen and (max-width: 500px)': {
			padding: '1rem',		
		},
	},
	upperChildContainer: {
		'@media screen and (max-width: 899px)': {
			width: '70%',			
		},
		'@media screen and (max-width: 600px)': {
			width: '100%',			
		},
	},
	mainHeader: {
		fontSize: '2.5rem',
		fontWeight: 700,
		lineHeight: '3rem',
		letterSpacing: '1px',
		'@media screen and (max-width: 899px)': {
			textAlign: 'center'
		},
		'@media screen and (max-width: 600px)': {
			fontSize: '2rem',
			lineHeight: '2.5rem',
		}
	},
	typicalAnimationStyle: {
		color: '#FFA500',
		marginBottom: '1rem',
		'@media screen and (max-width: 899px)': {
			textAlign: 'center'
		},
		'@media screen and (max-width: 600px)': {
			fontSize: '1rem',
		}
	},
	bulletPointStyle: {
		display: 'flex',
		flexDirection: 'row',
		gap: '20px',
		marginTop: '1rem',
		'@media screen and (min-width: 750px and max-width: 900px)': {
			marginLeft: '13%'
		},
		'@media screen and (max-width: 600px)': {
			fontSize: '0.75rem',
			gap: '10px',
		}
	},
	btnStyle: {
		margin: '0 5rem',
		marginTop: '3rem',
		backgroundColor: '#2E2EFF',
		color: '#FFF',
		fontWeight: 700,
		padding: '0.5rem 1.5rem',
		borderRadius: '8px',
		cursor: 'pointer',
		letterSpacing: '1px',
		'@media screen and (max-width: 899px)': {
			marginTop: '3rem',
			margin: '0 auto',
			display: 'flex',
			justifyContent: 'center',
		},
		'@media screen and (max-width: 500px)': {
			marginBottom: '1rem',		
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
	header3: {
		fontSize: '2rem',
		fontWeight: 700,
		lineHeight: '2.3rem',
		letterSpacing: '1px',
		textAlign: 'center',
		margin: '1rem auto',
		width: '64%',
		'@media screen and (max-width: 899px)': {
			fontSize: '1.6rem',
			lineHeight: '1.8rem',
			width: '70%',
		},
		'@media screen and (max-width: 634px)': {
			fontSize: '1.2rem',
			lineHeight: '1.5rem',
			width: '90%',
		},
	},
	rankIcon: {
		width: '30px',
		height: '30px',
		'@media screen and (max-width: 634px)': {
			width: '25px',
			height: '25px',
		},
	},
	childContainer3: {
		backgroundColor: '#9494FF',
		fontWeight: 700,
		fontSize: '1rem',
		borderRadius: '8px',
		marginRight: '1rem',
		marginTop: '1rem',
	},
	iconText3: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '14px',
		textAlign: 'center',
	},
	childContainer31: {
		backgroundColor: '#DEDEDE',
		fontWeight: 700,
		fontSize: '2rem',
		borderRadius: '8px',
		marginRight: '1rem',
		marginTop: '1rem',
		textAlign: 'center',
		'@media screen and (max-width: 400px)': {
			fontSize: '1.5rem',
		},
	},
	btnStyle3: {
		margin: '1rem auto',
		display: 'flex',
		justifyContent: 'center',
		fontWeight: 700,
		padding: '0.5rem 1.5rem',
		borderRadius: '8px',
		cursor: 'pointer',
		letterSpacing: '1px',
	},
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

const LandingPage = () => {

  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
  const profileData = useSelector((state) => state.profile.login);
  console.log(profileData);
  return (
	<Box style={{ backgroundColor: '#D4F1F4' }}>
		<Box className={classes.upperContainer}>
			<Box className={classes.upperChildContainer}>
				<Typography className={classes.mainHeader}>
					Invest in High Rated Bonds
				</Typography>
				<Box className={classes.typicalAnimationStyle}>
					<Typical
						steps={[
							'Top-tier Bonds', 1500,
							'Secured Guaranteed Bonds', 2200,
							'Perpetual Bonds', 1300,
							'Government Securities', 2200,
						]}
						loop={Infinity}
						wrapper="h1"
					/>
				</Box>
				<Box style={{ marginTop: '2.5rem', padding: '0 1rem', fontWeight: 700, color: '#525252' }}>
					{
						BondDetails.map((item, ind) => (
							<Box className={classes.bulletPointStyle}>
								<img style={item.style} src={item.src} width={item.width} height={item.height} />
								<Typography key={ind} style={{ fontSize: '1.1rem' }}>
									{item.val}
								</Typography>
							</Box>
						))
					}
				</Box>
				<Button 
					style={{ 
						color: hover ? '#282828' : '#FFF',
						backgroundColor: hover ? '#2E8BC0' : '#2E2EFF',
					}} 
					className={classes.btnStyle} 
					onMouseEnter={() => setHover(true)} 
					onMouseLeave={() => setHover(false)}
					onClick={() => navigate(ROUTES.BONDS)}
				>
					Discover
				</Button>
			</Box>
			<img className={classes.imgStyle} src={LandingImg} alt="bonds" />
		</Box>
		<BoxSection bondData={bondData} learnAboutBondsData={null} />
		<Box style={{ backgroundColor: '#F5F5F5', padding: '1rem 0', }}>
			<Typography className={classes.header3}>
				MedraFinvest is <img className={classes.rankIcon} src={Rank1} /> {' '}
				online platform for the largest collection of Bonds
			</Typography>
			<Grid style={{ padding: '2rem', paddingTop: '3rem', margin: '0 auto' }} container justifyContent='center' xs={12} sm={12} md={10} lg={12} spacing={6}>
				<Grid className={classes.childContainer3} item xs={8} sm={5} md={3} lg={3}>
					<Box className={classes.iconText3}>
						<img src={LowRiskIcon} width="50%" />
						Consistent capital growth with minimal risk
					</Box>
				</Grid>
				<Grid className={classes.childContainer3} item xs={8} sm={5} md={3} lg={3}>
					<Box className={classes.iconText3}>
						<img src={SystemUpdate} width="34%" />
						Stay Updated with the best price of bonds on our platform
					</Box>
				</Grid>
				<Grid className={classes.childContainer3} item xs={8} sm={6} md={3} lg={3}>
					<Box className={classes.iconText3}>
						<img style={{ marginTop: '-0.5rem' }} src={ReturnOnInvestment} width="90%" />
						Return on Fixed Income as high as 12%
					</Box>
				</Grid>
			</Grid>

			<Grid style={{ padding: '2rem', margin: '0 auto' }} container justifyContent='center' xs={12} sm={12} md={10} lg={12} spacing={6}>
				<Grid className={classes.childContainer31} item xs={8} sm={7} md={3} lg={3}>
					4000 <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>CR</span>
					<p style={{ fontSize: '1rem', fontWeight: 600, }}>
						worth of bonds are available on our platform
					</p>
				</Grid>
				<Grid className={classes.childContainer31} item xs={8} sm={5} md={3} lg={3}>
					1000 <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>CR</span>
					<p style={{ fontSize: '1rem', fontWeight: 600, }}>
						total transactions through our platforms
					</p>
				</Grid>
				<Grid className={classes.childContainer31} item xs={8} sm={5} md={3} lg={3}>
					1000+
					<p style={{ fontSize: '1rem', fontWeight: 600, }}>
						registered users are growing
					</p>
				</Grid>
			</Grid>
			<Button 
				style={{ 
					color: hover ? '#282828' : '#FFF',
					backgroundColor: hover ? '#2E8BC0' : '#0000D1',
				}}
				className={classes.btnStyle3}
				onMouseEnter={() => setHover(true)} 
				onMouseLeave={() => setHover(false)}
				onClick={() => navigate(ROUTES.BONDS)}
			>
				Learn More
			</Button>
		</Box>
		<BoxSection learnAboutBondsData={learnAboutBondsData} />
		<BoxSection meetOurTeam={meetOurTeam} />
	</Box>
  )
}

export default LandingPage

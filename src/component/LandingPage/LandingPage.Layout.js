import React, { useState } from 'react'
import { Box } from '@mui/material'
import Typical from 'react-typical'
import { Button, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ROUTES } from '../../Route/Routes.constants';
import LandingImg from '../../assets/LandingPageImg.png';
import ScaleIcon from '../../assets/ScaleIcon.png';
import CoinIcon from '../../assets/CoinIcon.png';
import DiversifiedPortfolio from '../../assets/DiversifiedPortfolio.png';

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
		marginTop: '3rem',
		margin: '0 5rem',
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
	}
}));

const BondDetails = [
	{
		src: DiversifiedPortfolio,
		val: 'Diversify portfolio with fixed income',
		style: { marginBottom: '4px' },
		width: '35px',
		height: '25px',
	},
	{
		src: CoinIcon,
		val: 'Get Fixed Return as high as 12%',
		style: { margin: '-0.875rem -1rem 0 -1rem' },
		width: '65px',
		height: '45px',
	},
	{
		src: ScaleIcon,
		val: 'Consistent capital growth with minimal risk',
		style: { marginTop: '-4px', marginRight: '-4px' },
		width: '40px',
		height: '30px',
	},
]

const LandingPage = () => {

  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
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
							'Perpetual Bonds', 1200,
							'Government Securities', 2000,
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
					style={{ color: hover ? '#282828' : '#FFF', backgroundColor: hover ? '#2E8BC0' : '#2E2EFF' }} 
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
	</Box>
  )
}

export default LandingPage

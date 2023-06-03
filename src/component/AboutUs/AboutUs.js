import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core';
import WhyUsImg from '../../assets/WhyUsImg.png'
import AboutUsImg from '../../assets/AboutUsImg.png'
import ServicesImg from '../../assets/ServicesImg.png'
import BoxSection from '../LandingPage/BoxSection.Layout';
import { learnAboutBondsData, meetOurTeam } from '../common/Data.constant';

const useStyles = makeStyles(() => {
	return {
		main: {
			padding: '1rem 3rem',
		},
		boxContainer: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			gap: '80px',
			margin: 'auto',
			'@media screen and (max-width: 899px)': {
				flexDirection: 'column',
				justifyContent: 'center',
				margin: '1rem auto',
				alignItems: 'center'
			}
		},
		boxContainer1: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'space-between',
			gap: '80px',
			margin: 'auto',
			marginTop: '3rem',
			'@media screen and (max-width: 899px)': {
				flexDirection: 'column',
				justifyContent: 'center',
				margin: '1rem auto',
				alignItems: 'center'
			}
		},
		imgStyle1: {
			width: '40%',
			'@media screen and (max-width: 899px)': {
				width: '60%',
			},
			'@media screen and (max-width: 499px)': {
				width: '80%',
			}
		},
		imgStyle2: {
			width: '45%',
			'@media screen and (max-width: 899px)': {
				width: '70%',
			},
			'@media screen and (max-width: 499px)': {
				width: '100%',
			}
		},
		header: {
			fontSize: "0.875rem",
			color: "#005de0",
			fontWeight: 700,
		},
		subTitle: {
			fontSize: "2.25rem",
			marginTop: '1rem',
			lineHeight: '2.6rem',
			color: "#282828",
			fontWeight: 700,
			'@media screen and (max-width: 499px)': {
				fontSize: "2rem",
			},
			'@media screen and (max-width: 399px)': {
				fontSize: "1.5rem",
			}
		},
	}
})

const AboutUs = () => {

  const classes = useStyles();

  return (
	<>
		<Box className={classes.main}>
			<h1 style={{ color: '#0000FF', paddingBottom: '2rem' }}>About Us</h1>
			<Box className={classes.boxContainer}>
				<img className={classes.imgStyle1} src={AboutUsImg} />
				<Box>
					<Typography className={classes.header}>
						About Us
					</Typography>
					<Typography className={classes.subTitle}>
						What we do?
					</Typography>
					<p>
						At Medra Finvest, we offer financial advice along with a wide range of services and solutions for the financial needs of our clients, ranging from mutual funds to general and life insurances. Our team of advisors have emerged as a preferred financial advisor through a strong intellectual base coupled with an unparalleled bouquet of products and services.
						<br />
						<br />
						Together with you, our partner, we look forward to forging new, unique and healthy relationships to present novel solutions that will benefit you and your business.
						<br />
						<br />
						At present we are present in 3 of the Major Metro Cities of INDIA - <b>Kolkata</b>, <b>New Delhi</b> and <b>Bangalore</b>.
					</p>
				</Box>
			</Box>
			<Box className={classes.boxContainer1}>
				<img className={classes.imgStyle2} src={WhyUsImg} />
				<Box>
					<Typography className={classes.header}>
						Why Us?
					</Typography>
					<Typography className={classes.subTitle}>
						Why Choose Us?
					</Typography>
					<p>
						Our trustworthy team of financial experts with an accumulated experience of more than 40 Years will guide you throughout the entire process and help you on each step of the way. We are known to provide product innovation, research and advice, and comprehensive access to the world's capital markets.
						<br />
						<br />
						To get a kickstart on your financial venture, give us a call and book a free consultation with our financial experts.
					</p>
				</Box>
			</Box>
			<Box style={{ margin: '3rem 0' }} className={classes.boxContainer}>
				<img className={classes.imgStyle2} src={ServicesImg} />
				<Box>
					<Typography className={classes.header}>
						Our Services
					</Typography>
					<Typography className={classes.subTitle}>
						What we provide?
					</Typography>
					<p>
						At Medra Finvest, we strive to maximize the value of our customers and business partners through committed and expert service operations.
						<br />
						<br />
						We offer holistic solutions to the various financial requirements of our clients.
						<br />
						<br />
						<b>We offer our services in :</b>
						<br />
						<ul>
							<li><b>INTER-CORPORATE DEPOSIT</b></li>
							<li><b>BONDS</b></li>
							<li><b>MUTUAL FUNDS</b></li>
							<li><b>INSURANCE</b></li>
							<li><b>UNLISTED STOCKS</b></li>
						</ul>
					</p>
				</Box>
			</Box>
		</Box>
		<BoxSection learnAboutBondsData={learnAboutBondsData} />
		<BoxSection meetOurTeam={meetOurTeam} />
	</>
  )
}

export default AboutUs
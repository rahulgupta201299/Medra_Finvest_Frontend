import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate, Link } from 'react-router-dom';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MedraFinvestLogo from "../../assets/medra_logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { learnAboutBondsData } from "../common/Data.constant";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-evenly',
	'@media screen and (max-width: 700px)': {
		flexDirection: 'column',
	},
  },
  nested: {
    display: "flex",
    flexDirection: "column",
	width: '30%',
	'@media screen and (max-width: 700px)': {
		marginTop: '2rem',
		width: '100%',
	},
  },
  imgStyle: {
    width: "55px",
    height: "40px",
  },
  header: {
    fontSize: "1.5rem",
    color: "#FFF",
    fontWeight: 700,
    letterSpacing: "1px",
	textAlign: 'center',
  },
  textStyle: {
    fontSize: "1rem",
    color: "#FFF",
    letterSpacing: "0.32px",
    fontWeight: 500,
	textAlign: 'center',
  },
}));

const menuBarOptions = [
	{
		id: 1,
		val: "Home",
	},
	{
		id: 2,
		val: "About Us",
	},
	{
		id: 3,
		val: "InterCorporate Deposit",
	},
	{
		id: 4,
		val: "Bonds",
	},
	{
		id: 5,
		val: "Insurance",
	},
	{
		id: 6,
		val: "Mutual Funds",
	},
	{
		id: 7,
		val: "Unlisted Stocks",
	},
	{
		id: 8,
		val: "Contact Us",
	},
];

const Footer = () => {
  const classes = useStyles();
  const [hover, setHover] = useState("");
  const [readMore, setReadMore] = useState(false);
  const navigate =  useNavigate();

  return (
    <Box bgcolor="#0c1d2e" p={2} pt={6} pb={6}>
      <Box className={classes.container}>
        <Box className={classes.nested}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
			  margin: 'auto',
            }}
          >
            <img
              className={classes.imgStyle}
              src={MedraFinvestLogo}
              alt="Medra Finvest"
            />
            <Typography className={classes.header}>MedraFinvest</Typography>
          </Box>
          <LocationOnIcon
            style={{
              color: "#FFA500",
			  margin: 'auto',
			  marginTop: '0.5rem',
              marginBottom: "0.5rem",
            }}
          />
          <Typography style={{ fontSize: "1.2rem" }} className={classes.header}>
            MEDRA FINVEST PVT. LTD.
          </Typography>
          <Typography style={{ marginTop: '0.5rem' }} className={classes.textStyle}>
            7B, KIRAN SHANKAR ROY ROAD,
			<br /> 
			PUNWANI CHMABERS,
            <br />
            ROOM NO. - 4 A, H, I, 4TH FLOOR
            <br />
            KOLKATA - 700 001
          </Typography>
          <MailOutlineIcon
            style={{
              color: "#FFA500",
			  margin: 'auto',
              marginTop: "1rem",
              marginBottom: "0.5rem",
            }}
          />
          <Typography className={classes.textStyle}>
            medrafinvest@gmail.com
            <br />
            aamyfinvest@gmail.com
          </Typography>
		  <LocalPhoneIcon
            style={{
              color: "#FFA500",
			  margin: 'auto',
              marginTop: "1rem",
              marginBottom: "0.5rem",
            }}
          />
          <Typography className={classes.textStyle}>
		  	+91 91632 48745
            <br />
            +91 97483 98280
          </Typography>
		  <Box style={{ display: 'flex', flexDirection: 'row', margin: 'auto', marginTop: '1rem', gap: '10px' }}>
		  	<Link to="https://www.google.com" target="_blank" rel="noreferrer">
				<FacebookIcon style={{ color: '	#1877F2', cursor: 'pointer' }} />
			</Link>
			<Link to="https://www.google.com" target="_blank" rel="noreferrer">
				<InstagramIcon style={{ color: 'rgb(193, 53, 132)', cursor: 'pointer' }} />
			</Link>
			<Link to="https://www.google.com" target="_blank" rel="noreferrer">
				<LinkedInIcon style={{ color: '#0A66C2', cursor: 'pointer' }} />
			</Link>
		  </Box>
        </Box>
		<Box className={classes.nested}>
			<Typography style={{ fontSize: '1.2rem' }} className={classes.header}>
				Invest With Us
			</Typography>
			<Box style={{ display: 'flex', flexDirection: 'column', margin: 'auto', marginTop: '1rem' }}>
				{
					menuBarOptions.map((item, ind) => (
						<Typography 
							style={{ marginTop: '0.5rem', cursor: 'pointer', color: item.val === hover && '#FFA500' }} 
							key={ind} 
							className={classes.textStyle}
							onMouseEnter={() => setHover(item.val)}
							onMouseLeave={() => setHover("")}
							onClick={() => {
								if (item.val.toLowerCase() === 'home') navigate('/');
								else navigate(item.val.split(" ").join("-").toLowerCase());
							}}
						>
							{item.val}
						</Typography>
					))
				}
			</Box>
		</Box>
		<Box className={classes.nested}>
			<Typography style={{ fontSize: '1.2rem' }} className={classes.header}>
				Learn
			</Typography>
			<Box style={{ display: 'flex', flexDirection: 'column', margin: 'auto', marginTop: '1rem' }}>
				{
					learnAboutBondsData.map((item, ind) => (
						<Typography 
							style={{ marginTop: '0.5rem', cursor: 'pointer', color: item.title === hover && '#FFA500' }} 
							key={ind} 
							className={classes.textStyle}
							onMouseEnter={() => setHover(item.title)}
							onMouseLeave={() => setHover("")}
							onClick={() => navigate(item.to)}
						>
							{item.title}
						</Typography>
					))
				}
			</Box>
		</Box>
      </Box>
	  <Box style={{ fontSize: '1.2rem', marginTop: '3rem', marginBottom: '1rem' }} className={classes.header}>
		Note to Investors
	  </Box>
	  <Typography style={{ textAlign: 'start', width: '80%', margin: 'auto' }} className={classes.textStyle}>
	  	Medra Finvest Pvt. Ltd. is a SEBI registered broker under BSE new debt segment allowing investors to trade in secondary bonds & debentures through exchange.
		<br />
		<br />
		Investment in debts securities are subject to risks. Read all the offer related documents carefully. 
		{
			!readMore && (
				<span onClick={() => setReadMore(true)} style={{ fontSize: '0.8rem', color: '#979797', cursor: 'pointer' }}>{' '}Read More</span>
			)
		}
		{
			readMore && (
				<>
					<br />
					<br />
					The information shown on the website should not be construed as financial advice or as an offer or recommendation to buy or sell any security or any products/services of GSPL or any product/services of its third-party client(s). The user should act and rely on the information/data shown on the website only after understanding all associated risk parameters. Any action/decision taken by the user on the basis of the information shown on this website shall be the sole responsibility of the user. Neither GSPL nor its directors, employees, associates, representatives, or agents shall be liable for any damages whether direct, indirect, special, or consequential including lost revenue or lost profits that may arise to the user from or in connection with the use of the information/data shown on this website.
					<br />
					<br />
					We understand that certain investment advisors may be approaching members of the public including our clients, representing that they are our partners, or representing that their investment advice is based on our research. Please note that we have not engaged any third parties to render any investment advisory services on our behalf nor are we providing any stock recommendations/tips/research report/advisory. Persons making investments on the basis of such advice may lose all or a part of their investments along with the fee paid to such unscrupulous persons. Please be cautious about any phone call that you may receive from persons representing to be such investment advisors, or a part of research firm offering advice on securities. Do not make payments through e-mail links, WhatsApp or SMS. Please do not share your personal or financial information with any person without proper verification. Always trade through a registered broker.
					<br />
					<br />
					We collect, retain, and use your contact information for legitimate business purposes only, to contact you and to provide you information & latest updates regarding our products & services.
					<br />
					<br />
					Corporate Fixed Deposits are offered in the capacity of a distributor and all disputes with respect to distribution activity, would not have access to exchange investor redressal forum or arbitration mechanism.
					<span onClick={() => setReadMore(false)} style={{ fontSize: '0.8rem', color: '#979797', cursor: 'pointer' }}>{' '}Read less</span>
				</>
			)
		}
	  </Typography>
    </Box>
  );
};

export default Footer;

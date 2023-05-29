import React, { useState } from 'react'
import { Box, Button, FormControlLabel, Grid, Switch, Typography, makeStyles } from '@material-ui/core';
import OtpInput from 'react-otp-input';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LoginSideImg from '../../assets/ProfileImg.jpeg'
import InputText from '../common/InputText';

const useStyles = makeStyles(() => {
	return {
		main: {
			backgroundColor: '#5C5CFF',
			minHeight: '100vh',
		},
		container: {
			display: 'flex',
			flexDirection: 'row',
			width: '100%',
		},
		imgStyle: {
			position: 'fixed',
			width: "50%",
			height: "100%",
			'@media screen and (max-width: 899px)': {
				display: 'none !important',
			},
		},
		profileContainer: {
			marginLeft: '52%',
			padding: '2rem',
			overflow: 'scroll',
			width: '100%',
			'@media screen and (max-width: 899px)': {
				margin: 'auto',
			},
			'@media screen and (min-width: 600px) and (max-width: 750px)': {
				width: '70%',
			},
			'@media screen and (min-width: 750px) and (max-width: 899px)': {
				width: '60%',
			},
			'@media screen and (min-width: 1100px)': {
				width: '40%',
			},
		},
		boxContainer: {
			backgroundColor: '#FFFFFF',
			borderRadius: '8px',
			width: '100%',
		},
		boxChild: {
			marginTop: '1rem',
			padding: '1rem',
		},
		header: {
			textAlign: 'center',
			fontWeight: 700,
			fontSize: '1.125rem',
		},
		toggleContainer: {
			marginTop: '1rem',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-around',
		},
		toggleText: {
			fontWeight: 700,
			fontSize: '1rem',
			cursor: 'pointer',
		},
		labelText: {
			marginTop: '1.5rem',
			fontSize: '1rem',
			textAlign: 'center',
		},
		btnStyle: {
			margin: '0 auto',
			marginTop: '2rem',
			marginBottom: '1rem',
			fontWeight: 700,
			width: '50%',
			alignItems: 'center',
		},
		otpInputContainer: {
			marginTop: '1rem',
			display: "flex",
			justifyContent: 'center',
		},
		otpInputStyles: {
			boxSizing: 'border-box',
			width: `2.5rem !important`,
			fontWeight: 700,
			height: '2.5rem',
			border: '1px solid #d1e8ff',
			borderRadius: `0.25rem 0.25rem 0 0`,
			backgroundColor: '#f9fcff',
			fontSize: '1rem',
			'@media screen and (max-width: 374px)': {
				width: `2rem !important`,
				height: '2rem',
			},
		},
		btnContainer: {
			display: "flex",
			justifyContent: 'space-around',
			gap: '1rem'
		},
		verifiedText: {
			color: '#00D100',
			marginTop: '0.3rem',
			display: 'flex',
			alignItems: 'center',
			fontSize: '0.75rem',
			marginLeft: 'calc(7.5% + 12px)',
		}
	}
});

const EmailSignUp = (props) => {

	const classes = useStyles();
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const { email, setEmail, password, setPassword, btnText, type } = props;

	const handleEmailChange = (e) => {
		const val = e.target.value.toLowerCase();
		if ((!val.includes('@') || !val.includes('.')) && val) setEmailError('Please Enter a Valid Email');
		else setEmailError('');
		setEmail(val);
	}

	const handlePasswordChange = (e) => {
		const val = e.target.value;
		if (val.length < 8 && val) setPasswordError('Password must have at least 8 characters');
		else setPasswordError('');
		setPassword(val);
	}

	const handleProceed = () => {
		if (type === "signup") {

		}
	}

	return (
		<>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '2px', fontWeight: 700 }}
				type="email"
				placeholder="email"
				required={true}
				error={!!emailError}
				hiddenLabel={true}
				value={email}
				onChange={handleEmailChange}
				color="secondary"
				label="Email Id"
				errorText={emailError}
			/>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '2px' }} 
				type="password"
				placeholder="password"
				required={true}
				error={!!passwordError}
				hiddenLabel={true}
				value={password}
				onChange={handlePasswordChange}
				color="secondary"
				label="Password"
				errorText={passwordError}
			/>
			<Button
				className={classes.btnStyle}
				color="primary"
				variant="contained"
				size="medium"
				disabled={!email || !password || emailError || passwordError}
				onClick={handleProceed}
			>
				{btnText}
			</Button>
		</>
	)
}

const MobileSignUp = (props) => {
	const { mobile, showOtpInput, otp, setOtp, setMobile, setShowOtpInput, verifiedMobile, setVerifiedMobile, type } = props;
	const classes = useStyles();

	const handleMobileChange = (e) => {
		const val = e.target.value.replace(/\D/g, '');
		if (val.length > 10) return;
		setMobile(val);
	}

	const handleSendOtp = () => {
		setShowOtpInput(true);
	}

	const handleVerifyOtp = () => {
		if (type === "signup") {
			setShowOtpInput(false);
			setVerifiedMobile(true);
		}
	}

	const updateOtp = (val) => {
		const pattern = /^\d+$/;
		if(pattern.test(val)) setOtp(val);
	}

	return (
		<>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '3px', fontWeight: 700 }} 
				type="tel"
				value={mobile}
				placeholder="mobile no"
				required={true}
				error={!!(mobile.length < 10 && mobile)}
				hiddenLabel={true}
				color="secondary"
				disabled={showOtpInput || verifiedMobile}
				onChange={handleMobileChange}
				label="Mobile No"
				errorText={'Please enter a valid mobile number'}
			/>
			{
				verifiedMobile && (
					<Typography className={classes.verifiedText}>
						Mobile No Verified <CheckCircleIcon style={{ marginLeft: '0.3rem' }} />
					</Typography>
				)
			}
			<Button
				style={{ display: showOtpInput || verifiedMobile ? 'none' : '' }}
				className={classes.btnStyle}
				color="primary"
				variant="contained"
				size="medium"
				disabled={!mobile || mobile.length < 10}
				onClick={handleSendOtp}
			>
				Send OTP
			</Button>
			{
				showOtpInput && (
					<>
						<Typography className={classes.labelText}>
							Enter OTP
						</Typography>
						<Grid item container className={classes.otpInputContainer} xs={12} justifyItems='center' alignItems='center'>
							<OtpInput
								inputStyle={classes.otpInputStyles}
								onChange={updateOtp}
								numInputs={6}
								separator={<span>&nbsp;&nbsp;&nbsp;</span>}
								value={otp}
								hasErrored={false}
								errorStyle="error"
								isInputNum={true}
							/>
						</Grid>
						<Box className={classes.btnContainer} xs={10}>
							<Button
								className={classes.btnStyle}
								color="primary"
								variant="outlined"
								size="medium"
								onClick={() => {
									setShowOtpInput(false);
									setOtp('');
								}}
							>
								Edit
							</Button>
							<Button
								className={classes.btnStyle}
								color="primary"
								variant="contained"
								size="medium"
								disabled={otp.length !== 6}
								onClick={handleVerifyOtp}
							>
								Verify
							</Button>
						</Box>
					</>
				)
			}

		</>
	)
}

const Login = () => {
	const [mobileOtpLogin, setMobileOtpLogin] = useState(false);
	const [mobile, setMobile] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showOtpInput, setShowOtpInput] = useState(false);
	const [otp, setOtp] = useState('');
	const [verifiedMobile, setVerifiedMobile] = useState(false);

	const handleToggleChange = (e) => {
		const val = e.target.checked;
		setMobileOtpLogin(val);
		setMobile('');
		setEmail('');
		setPassword('');
		setOtp('');
		setShowOtpInput(false);
	}

	return (
		<Box style={{ padding: '0 1rem', display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
			<FormControlLabel style={{ marginLeft: '7.5%', color: '#0000FF' }} control={<Switch onChange={handleToggleChange} color="secondary" />} label={<span style={{ fontSize: '0.875rem' }}>Mobile OTP Login</span>} />
			{
				mobileOtpLogin ? (
					<MobileSignUp
						mobile={mobile}
						setMobile={setMobile}
						showOtpInput={showOtpInput}
						setShowOtpInput={setShowOtpInput}
						otp={otp}
						setOtp={setOtp}
						verifiedMobile={verifiedMobile}
						setVerifiedMobile={setVerifiedMobile}
						type="login"
					/>
				) : (
					<EmailSignUp
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						btnText="Proceed"
						type="login"
					/>
				)
			}
		</Box>
	)
}

const SignUp = () => {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [mobileOtpLogin, setMobileOtpLogin] = useState(false);
	const [mobile, setMobile] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showOtpInput, setShowOtpInput] = useState(false);
	const [otp, setOtp] = useState('');
	const [verifiedMobile, setVerifiedMobile] = useState(false);

	return (
		<Box style={{ padding: '0 1rem', display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '2px', fontWeight: 700 }}
				type="text"
				placeholder="first name"
				required={true}
				error={firstName.length < 3 && firstName}
				hiddenLabel={true}
				value={firstName}
				onChange={(e) => setFirstName(e.target.value.toUpperCase().replace(/[^A-Za-z]/g, ''))}
				color="secondary"
				label="First Name"
				errorText={'Enter a valid first name'}
			/>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '2px', fontWeight: 700 }}
				type="text"
				placeholder="last name"
				required={true}
				error={lastName.length < 3 && lastName}
				hiddenLabel={true}
				value={lastName}
				onChange={(e) => setLastName(e.target.value.toUpperCase().replace(/[^A-Za-z]/g, ''))}
				color="secondary"
				label="Last Name"
				errorText={'Enter a valid last name'}
			/>
			<MobileSignUp
				mobile={mobile}
				setMobile={setMobile}
				showOtpInput={showOtpInput}
				setShowOtpInput={setShowOtpInput}
				otp={otp}
				setOtp={setOtp}
				verifiedMobile={verifiedMobile}
				setVerifiedMobile={setVerifiedMobile}
				type="signup"
			/>
			{
				verifiedMobile && (
					<EmailSignUp
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						btnText="Submit"
						type="signup"
					/>
				)
			}
		</Box>
	)
}

const SignUpContainer = () => {
  const classes = useStyles();
  const [loginSelected, setLoginSelected] = useState(true);

  return (
	<Box className={classes.main}>
		<Grid container className={classes.container}>
			<img src={LoginSideImg} className={classes.imgStyle} alt="Welcome to MF" />
			<Box className={classes.profileContainer}>
				<Box className={classes.boxContainer}>
					<Box className={classes.boxChild}>
						<Typography className={classes.header}>
							Welcome to Medra Finvest 🙏
						</Typography>
						<Box className={classes.toggleContainer}>
							<Typography 
								style={{ 
									color: loginSelected ? '#0000FF' : '#282828',
									textDecoration: loginSelected ?  'underline' : 'none',
								}} 
								className={classes.toggleText}
								onClick={() => setLoginSelected(true)}
							>
								Login
							</Typography>
							<Typography 
								style={{ 
									color: loginSelected ? '#282828' : '#0000FF',
									textDecoration: loginSelected ? 'none' : 'underline'
								}} 
								className={classes.toggleText}
								onClick={() => setLoginSelected(false)}
							>
								Sign Up
							</Typography>
						</Box>
						{
							loginSelected ? <Login /> : <SignUp />
						}
					</Box>
				</Box>
			</Box>
		</Grid>
	</Box>
  )
}

export default SignUpContainer;
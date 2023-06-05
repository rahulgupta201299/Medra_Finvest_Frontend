import React, { useState } from 'react'
import { Box, Button, FormControlLabel, Grid, Switch, Typography, makeStyles } from '@material-ui/core';
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LoginSideImg from '../../assets/ProfileImg.jpeg'
import InputText from '../common/InputText';
import { Alert, Snackbar } from '@mui/material';
import firebase, { auth } from '../common/Firebase';
import BackDrop from '../common/BackDrop';
import Axios from '../common/Axios';
import { ROUTES } from '../../Route/Routes.constants';
import { addUserDetails } from '../redux/LandingReducer/ProfileReducer';

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
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { email, setEmail, password, setPassword, btnText, type, firstName = '', lastName = '', mobile = '', setAlertMsg, setAlertType, setOpenAlert, setLoading, setLoginSelected, setMobile, setVerifiedMobile } = props;

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

	const handleProceed = async () => {
		if (type === "signup") {
			const payload = {
				firstName,
				lastName,
				mobile,
				email,
				password,
			};
			try {
				setLoading(true);
				const res = await Axios.post('/profile/signup', payload);
				const { data } = res;
				const { statusCode } = data;
				setOpenAlert(true);
				setAlertMsg(data?.msg);
				if (statusCode === 201) {
					setAlertType('success');
				} else {
					setAlertType('warning');
				}
				setOpenAlert(true);
				setLoginSelected(true);
				setMobile('');
				setVerifiedMobile(false);
			} catch (e) {
				setOpenAlert(true);
				setAlertMsg('Something Went Wrong!');
				setAlertType('error');
			} finally {
				setLoading(false);
				setTimeout(() => setOpenAlert(false), 6000);
			}
		} else {
			const payload = {
				type: "emailLogin",
				email,
				password,
			};
			try {
				setLoading(true);
				const res = await Axios.post('/profile/login', payload);
				const { data } = res;
				const { data: data1 } = data;
				setOpenAlert(true);
				setAlertMsg(data?.msg);
				if (data?.login) {
					setAlertType('success');
					dispatch(addUserDetails({
						loggedIn: true,
						...data1
					}));
					navigate(ROUTES.HOME);
				} else {
					setAlertType('error');
					if (!data?.incorrectPassword) setLoginSelected(false);
				}
				setOpenAlert(true);
			} catch (e) {
				console.log(e);
				setOpenAlert(true);
				setAlertMsg('Something Went Wrong!');
				setAlertType('error');
			} finally {
				setLoading(false);
				setTimeout(() => setOpenAlert(false), 6000);
			}
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
	const { mobile, showOtpInput, otp, setOtp, setMobile, setShowOtpInput, verifiedMobile, setVerifiedMobile, type, setAlertMsg, setAlertType, setOpenAlert, setLoading, setLoginSelected } = props;
	const classes = useStyles();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [confirmation, setConfirmation] = useState('');

	const handleMobileChange = (e) => {
		const val = e.target.value.replace(/\D/g, '');
		if (val.length > 10) return;
		setMobile(val);
	}

	const setUpRecaptcha=()=>{
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': function(response) {
              handleSendOtp();
            },
            'expired-callback':(err)=>{
                console.log(err);
            },
            defaultCountry: "IN",
        });
    }

	const handleSendOtp = async () => {
		setUpRecaptcha();
		var phoneNumber = "+91" + mobile;
        var appVerifier = window.recaptchaVerifier;

		try {
			setLoading(true);
			const _confirmation = await auth.signInWithPhoneNumber(phoneNumber, appVerifier);
			setShowOtpInput(true);
			setConfirmation(_confirmation);
			setAlertMsg("OTP Sent Successfully!");
			setAlertType('success');
			setOpenAlert(true);
		} catch (e) {
			setShowOtpInput(false);
			setAlertMsg("Some error Occured. Try Again!");
			setAlertType('error');
			setOpenAlert(true);
		} finally {
			setLoading(false);
		}
		setTimeout(() => setOpenAlert(false), 6000);
	}

	const handleLoginApiCall = async () => {
		const payload = {
			type: "mobileLogin",
			mobile,
		}
		try {
			setLoading(true);
			const res = await Axios.post('/profile/login', payload);
			const { data } = res;
			const { data: data1 } = data;
			setOpenAlert(true);
			setAlertMsg(data?.msg);
			if (data?.login) {
				setAlertType('success');
				dispatch(addUserDetails({
					loggedIn: true,
					...data1
				}));
				navigate(ROUTES.HOME);
			} else {
				setAlertType('error');
				setLoginSelected(false);
				setVerifiedMobile(false);
			}
			setOpenAlert(true);
		} catch (e) {
			setOpenAlert(true);
			setAlertMsg('Something Went Wrong!');
			setAlertType('error');
			setVerifiedMobile(false);
		} finally {
			setLoading(false);
			setTimeout(() => setOpenAlert(false), 6000);
		}
	}

	const handleVerifyOtp = async () => {
		try {
			setLoading(true);
			await confirmation.confirm(otp);
			setAlertMsg("Mobile OTP Verified!");
			setAlertType('success');
			setOpenAlert(true);
			setVerifiedMobile(true);
			if (type === "login") {
				handleLoginApiCall();
			}
		} catch (e) {
			setAlertMsg("Incorrect or Bad Verification Code");
			setAlertType('error');
			setOpenAlert(true);
		} finally {
			setLoading(false);
		}
		setShowOtpInput(false);
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
			<div id="recaptcha-container"></div>
		</>
	)
}

const Login = ({ setAlertMsg, setAlertType, setOpenAlert, setLoading, setLoginSelected, mobile, setMobile, setVerifiedMobile, verifiedMobile }) => {
	const [mobileOtpLogin, setMobileOtpLogin] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showOtpInput, setShowOtpInput] = useState(false);
	const [otp, setOtp] = useState('');

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
						setAlertMsg={setAlertMsg}
						setAlertType={setAlertType}
						setOpenAlert={setOpenAlert}
						setLoading={setLoading}
						setLoginSelected={setLoginSelected}
						type="login"
					/>
				) : (
					<EmailSignUp
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						setAlertMsg={setAlertMsg}
						setAlertType={setAlertType}
						setOpenAlert={setOpenAlert}
						setLoading={setLoading}
						setLoginSelected={setLoginSelected}
						setMobile={setMobile}
						setVerifiedMobile={setVerifiedMobile}
						btnText="Proceed"
						type="login"
					/>
				)
			}
		</Box>
	)
}

const SignUp = ({ setAlertMsg, setAlertType, setOpenAlert, setLoading, setLoginSelected, mobile, setMobile, setVerifiedMobile, verifiedMobile }) => {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [mobileOtpLogin, setMobileOtpLogin] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showOtpInput, setShowOtpInput] = useState(false);
	const [otp, setOtp] = useState('');

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
				setAlertMsg={setAlertMsg}
				setAlertType={setAlertType}
				setOpenAlert={setOpenAlert}
				setLoading={setLoading}
				setLoginSelected={setLoginSelected}
				type="signup"
			/>
			{
				verifiedMobile && (
					<EmailSignUp
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						firstName={firstName}
						lastName={lastName}
						mobile={mobile}
						setAlertMsg={setAlertMsg}
						setAlertType={setAlertType}
						setOpenAlert={setOpenAlert}
						setLoading={setLoading}
						setLoginSelected={setLoginSelected}
						setMobile={setMobile}
						setVerifiedMobile={setVerifiedMobile}
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
  const [alertType, setAlertType] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState('');
  const [verifiedMobile, setVerifiedMobile] = useState(false);

  return (
	<Box className={classes.main}>
		<BackDrop open={loading} />
		<Snackbar
			style={{
				width: '100%',
				margin: window.innerWidth < 900 ? '20px 0' : '20px 25%',
				display: 'flex',
				justifyContent: 'center',
			}}
			anchorOrigin={{
				vertical: "top",
				horizontal: "center"
				}}
			open={openAlert}
		>
			<Alert severity={alertType}>{alertMsg}</Alert>
		</Snackbar>
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
							loginSelected ? 
							<Login
								setAlertMsg={setAlertMsg}
								setAlertType={setAlertType}
								setOpenAlert={setOpenAlert}
								setLoading={setLoading}
								setLoginSelected={setLoginSelected}
								mobile={mobile}
								setMobile={setMobile}
								verifiedMobile={verifiedMobile}
								setVerifiedMobile={setVerifiedMobile}
							/> : 
							<SignUp 
								setAlertMsg={setAlertMsg}
								setAlertType={setAlertType}
								setOpenAlert={setOpenAlert}
								setLoading={setLoading}
								setLoginSelected={setLoginSelected}
								mobile={mobile}
								setMobile={setMobile}
								verifiedMobile={verifiedMobile}
								setVerifiedMobile={setVerifiedMobile}
							/>
						}
					</Box>
				</Box>
			</Box>
		</Grid>
	</Box>
  )
}

export default SignUpContainer;
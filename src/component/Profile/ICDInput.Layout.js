import React, { useState } from 'react'
import { Box, Button } from '@material-ui/core';
import { Alert, Snackbar } from '@mui/material';
import InputText from '../common/InputText';
import Axios from '../common/Axios';

const ICDInput = ({ setLoading, type }) => {
  const [hover, setHover] = useState(false);
  const [minTenure, setMinTenure] = useState('');
  const [maxTenure, setMaxTenure] = useState('');
  const [roi, setROI] = useState('');
  const [totalCumulative, setTotalCumulative] = useState('');
  const [aum, setAUM] = useState('');
  const [success, setSuccess] = useState(false);

  const checkAllData = minTenure && maxTenure && roi && totalCumulative && aum;

  const handleSubmit = async () => {
	setLoading(true);
	const data = [
		{
			min_tenure: minTenure,
			max_tenure: maxTenure,
			rate_of_interest: roi,
			total_cumulative_experience: totalCumulative,
			aum: aum,
		}
	]
	try {
		await Axios.post('/data/upload', { data, type });
		setSuccess(true);
		setMinTenure('');
		setMaxTenure('');
		setROI('');
		setTotalCumulative('');
		setAUM('');
	} catch (e) {
		const { data } = e;
		console.log(data?.msg);
	} finally {
		setLoading(false);
		setTimeout(() => {
			setSuccess(false)
		}, 6000);
	}
  }

  return (
	<Box style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
			<Snackbar
				style={{ 
					width: '100%',
					margin: window.innerWidth < 900 ? '20px 0' : '20px 13%', 
					display: 'flex', 
					justifyContent: 'center' 
				}}
				anchorOrigin={{
					vertical: "top",
					horizontal: "center"
				 }}
				open={success}
			>
				<Alert severity="success">File has been successfully uploaded</Alert>
			</Snackbar>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '2px', fontWeight: 700, display: 'flex', justifyContent: 'flex-start' }}
				type="text"
				placeholder="Min Tenure"
				required={true}
				hiddenLabel={true}
				value={minTenure}
				onChange={(e) => setMinTenure(e.target.value)}
				color="secondary"
				label="Min Tenure"
			/>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '2px', fontWeight: 700, display: 'flex', justifyContent: 'flex-start' }}
				type="text"
				placeholder="Max Tenure"
				required={true}
				hiddenLabel={true}
				value={maxTenure}
				onChange={(e) => setMaxTenure(e.target.value)}
				color="secondary"
				label="Max Tenure"
			/>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '2px', fontWeight: 700, display: 'flex', justifyContent: 'flex-start' }}
				type="text"
				placeholder="Rate Of Interest"
				required={true}
				hiddenLabel={true}
				value={roi}
				onChange={(e) => setROI(e.target.value)}
				color="secondary"
				label="Rate Of Interest"
			/>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '2px', fontWeight: 700, display: 'flex', justifyContent: 'flex-start' }}
				type="text"
				placeholder="Total Cumulative Experience"
				required={true}
				hiddenLabel={true}
				value={totalCumulative}
				onChange={(e) => setTotalCumulative(e.target.value)}
				color="secondary"
				label="Total Cumulative Experience"
			/>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '2px', fontWeight: 700, display: 'flex', justifyContent: 'flex-start' }}
				type="text"
				placeholder="AUM"
				required={true}
				hiddenLabel={true}
				value={aum}
				onChange={(e) => setAUM(e.target.value)}
				color="secondary"
				label="Asset Under Management"
			/>
			<Button
				style={{
					backgroundColor: hover || !checkAllData ? '#8AFF8A' : '#00D100',
					color: hover || !checkAllData ? '#282828' : '#FFF',
					fontWeight: 700,
					padding: '0.5rem 2rem',
					borderRadius: '8px',
					margin: '0 auto',
					marginTop: '50px',
					display: 'flexx',
				}}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				onClick={handleSubmit}
				disabled={!checkAllData}
			>
				Submit
			</Button>
	</Box>
  )
}

export default ICDInput;

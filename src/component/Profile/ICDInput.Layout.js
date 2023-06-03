import React from 'react'
import { Box } from '@material-ui/core';
import InputText from '../common/InputText';

const ICDInput = () => {
  return (
	<Box style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '2px', fontWeight: 700, display: 'flex', justifyContent: 'flex-start' }}
				type="text"
				placeholder="first name"
				required={true}
				// error={firstName.length < 3 && firstName}
				hiddenLabel={true}
				// value={firstName}
				// onChange={(e) => setFirstName(e.target.value.toUpperCase().replace(/[^A-Za-z]/g, ''))}
				color="secondary"
				label="First Name"
				errorText={'Enter a valid first name'}
			/>
			<InputText
				style={{ width: '85%', borderBottom: '1px solid #000075', letterSpacing: '2px', fontWeight: 700 }}
				type="text"
				placeholder="last name"
				required={true}
				// error={lastName.length < 3 && lastName}
				hiddenLabel={true}
				// value={lastName}
				// onChange={(e) => setLastName(e.target.value.toUpperCase().replace(/[^A-Za-z]/g, ''))}
				color="secondary"
				label="Last Name"
				errorText={'Enter a valid last name'}
			/>
	</Box>
  )
}

export default ICDInput;

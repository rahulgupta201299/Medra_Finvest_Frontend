import React from 'react';
import { Box, FilledInput, Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => {
	return {
		labelText: {
			marginTop: '1rem',
			fontSize: '1rem',
			marginLeft: 'calc(7.5% + 12px)',
		},
		errorText: {
			color: '#FF0000',
			marginTop: '0.3rem',
			fontSize: '0.75rem',
			marginLeft: 'calc(7.5% + 12px)',
		}
	}
})

const InputText = (props) => {
  const {
	type,
	placeholder,
	onChange,
	name,
	disabled,
	required,
	value,
	style,
	label,
	error,
	errorText,
  } = props;
  const classes = useStyles();
  return (
	<>
		<Typography className={classes.labelText}>
			{label}
		</Typography>
		<Box style={{ display: 'flex', justifyContent: 'center' }}>
			<FilledInput
				type = {type}
				placeholder = {placeholder}
				onChange = {onChange}
				name = {name}
				disabled = {disabled}
				required = {required}
				value = {value}
				style={style}
				error={error}
				{...props}
			/>
		</Box>
		{
			error && (
				<Typography className={classes.errorText}>
					{errorText}
				</Typography>
			)
		}
	</>
  )
}

export default InputText

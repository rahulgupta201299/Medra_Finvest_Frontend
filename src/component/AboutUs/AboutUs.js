import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => {
	return {
		main: {
			padding: '1rem 3rem',
		},
		boxContainer: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			gap: '10px'
		},
		imgStyle: {
			width: '50%',
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
		}
	}
})

const AboutUs = () => {

  const classes = useStyles();

  return (
	<Box className={classes.main}>
		<Box className={classes.boxContainer}>
			<img className={classes.imgStyle} src="https://thepixelcurve.com/html/techmax/techmax/assets/images/overview-img-1.png" />
			<Box>
				<Typography className={classes.header}>
					SECURE DATA
				</Typography>
				<Typography className={classes.subTitle}>
					Next generation platform for secure data by AI
				</Typography>
			</Box>
		</Box>
	</Box>
  )
}

export default AboutUs
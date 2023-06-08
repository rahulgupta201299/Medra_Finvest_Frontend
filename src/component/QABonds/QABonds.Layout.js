import React, { useEffect } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import LearnAboutBondImg from '../../assets/LearnAboutBondImg.jpeg';

const useStyles = makeStyles((theme) => {
	return {
		header: {
			fontSize: '2rem',
			lineHeight: '2rem',
			fontWeight: 700,
			textAlign: 'center',
			'@media screen and (max-width: 700px)': {
				fontSize: '1.5rem',
				lineHeight: '1.5rem',
			},
			'@media screen and (max-width: 400px)': {
				fontSize: '1.3rem',
				lineHeight: '1.3rem',
			}
		},
		imgStyle: {
			margin: '1.5rem auto',
			width: '100%',
			'@media screen and (min-width: 900px)': {
				height: '500px',
			},
		}
	}
})

const QABonds = ({ data }) => {

  const classes = useStyles();

  useEffect(() => {
	window.scrollTo(0, 0);
  }, [])

  return (
	<Box style={{ padding: '1.5rem' }}>
		<Typography className={classes.header}>
			{data.title}
		</Typography>
		<img className={classes.imgStyle} src={data.image} />
		<p style={{ fontWeight: 500 }}>{data.initialPara}</p>
		{
			data.dataPoints && data.dataPoints.map((item, ind) => (
				<Box key={ind}>
					<h2>{item.key}</h2>
					<p>{item.value}</p>
				</Box>
			))
		}
		{
			data.listPoints && data.listPoints.map((item, index) => (
				<Box key={index}>
					<h2>{item.key}</h2>
					{
						item.value.map((it, ind) => (
							<li style={{ marginTop: '0.4rem' }} key={ind}>{it}</li>
						))
					}
				</Box>
			))
		}
		<p style={{ fontWeight: 500, paddingTop: '1rem' }}>{data.conclusion}</p>
	</Box>
  )
}

export default QABonds;

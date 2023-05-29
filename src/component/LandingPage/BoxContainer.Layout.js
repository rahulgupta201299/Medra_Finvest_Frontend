import React, { useState } from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	container: {
		backgroundColor: '#FFFF8A',
		width: '100%',
		borderRadius: '8px',
		padding: '1rem',
		cursor: 'pointer',
	},
	makeCircle: {
		height: '50px',
		width: '50px',
		borderRadius: '50%',
		backgroundColor: '#7EC8E3',
	},
	learnContainer: {
		width: '260px',
		height: '270px',
		borderRadius: '8px',
		backgroundColor: '#FFF',
		cursor: 'pointer',
		boxShadow: `rgb(38, 57, 77) 0px 20px 30px -10px`,
	},
	learnTitle: {
		marginTop: '-8px',
		padding: '1rem 0.5rem',
		borderRadius: '0 0 8px 8px',
		textAlign: 'center',
		fontSize: '1.2rem',
		fontWeight: 700,
		marginTop: 'auto',
		marginBottom: 'auto',
	},
	teamContainer: {
		width: '280px',
		height: '300px',
		borderRadius: '8px',
		backgroundColor: '#FFF',
		boxShadow: `rgb(38, 57, 77) 0px 20px 30px -10px`,
		margin: '1rem auto',
	},
	nameStyle: {
		textAlign: 'center',
		fontSize: '1.5rem',
		fontWeight: '700',
		letterSpacing: '1px',
		color: '#0000FF',
		textTransform: 'uppercase',
	},
	positionStyle: {
		textAlign: 'center',
		fontSize: '1rem',
		fontWeight: '700',
		letterSpacing: '1px',
		color: '#D18700',
	},
	imgStyleForTeam: {
		width: '60%',
		height: '55%',
		borderRadius: '50%',
		margin: '1rem auto',
		marginLeft: '18%',
		backgroundColor: '#EAEFF2',
	}
}))

const BoxContainer = ({ _bondData = null, _learnAboutBondsData = null, _meetOurTeam = null }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
	<Box>
		{
			_bondData && (
				<Box 
					style={{ 
						transform: hover ? 'scale(1.1)' : 'scale(1)',
						margin: hover && '1rem',
					}}
					className={classes.container} 
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<Box 
						style = {{ 
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							gap: '50px'
						}}
					>
						<Typography style={{ margin: 'auto', color: '#0000D1', fontSize: '0.875rem', letterSpacing: '1px', fontWeight: 700, width: '150px' }}>
							{_bondData.name}
						</Typography>
						<Box className={classes.makeCircle}>
							<Typography style={{ marginTop: '12px', marginLeft: '6px', color: '#282828', fontSize: '1rem', letterSpacing: '1px', fontWeight: 700  }}>
								{_bondData.type}
							</Typography>
						</Box>
					</Box>
					<hr style={{ margin: '1.2rem 0 1.8rem 0' }} />
					{
						_bondData.details.map((it, ind1) => (
							<Box key={ind1} style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '10px' }}>
								<Typography style={{ color: '#808080', fontSize: '0.875rem', letterSpacing: '1px'  }}>
									{it.key}
								</Typography>
								<Typography style={{ color: '#282828', fontSize: '1rem', letterSpacing: '1px', fontWeight: 700 }}>
									{it.value}
								</Typography>
							</Box>
						))
					}
				</Box>
			)
		}
		{
			_learnAboutBondsData && (
				<Box className={classes.learnContainer} onClick={() => navigate(_learnAboutBondsData.to)}>
					<img src={_learnAboutBondsData.src} style={{ borderRadius: '8px' }} width="100%" />
					<Box
						style={{
							color: hover && '#0000D1',
						}}
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						className={classes.learnTitle}
					>
						{_learnAboutBondsData.title}
					</Box>
				</Box>
			)
		}
		{
			_meetOurTeam && (
				<Box className={classes.teamContainer}>
					<img className={classes.imgStyleForTeam} src={_meetOurTeam.src} />
					<Typography className={classes.nameStyle}>
						{_meetOurTeam.name}
					</Typography>
					<Typography className={classes.positionStyle}>
						{_meetOurTeam.position}
					</Typography>
				</Box>
			)
		}
	</Box>
  )
}

export default BoxContainer;

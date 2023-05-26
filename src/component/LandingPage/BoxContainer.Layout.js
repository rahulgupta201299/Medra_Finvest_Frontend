import React, { useState } from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core';

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
	}
}))

const BoxContainer = ({ data }) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
	<Box 
		style={{ 
			transform: hover ? 'scale(1.1)' : 'scale(1)',
			padding: hover && '2rem',
		}}
		className={classes.container} 
		onMouseEnter={() => setHover(true)}
		onMouseLeave={() => setHover(false)}
	>
		{
			data.map((item, ind) => (
				<>
					<Box 
						key={ind} 
						style = {{ 
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							gap: '50px'
						}}
					>
						<Typography style={{ margin: 'auto', color: '#0000D1', fontSize: '0.875rem', letterSpacing: '1px', fontWeight: 700, width: '150px' }}>
							{item.name}
						</Typography>
						<Box className={classes.makeCircle}>
							<Typography style={{ marginTop: '12px', marginLeft: '6px', color: '#282828', fontSize: '1rem', letterSpacing: '1px', fontWeight: 700  }}>
								{item.type}
							</Typography>
						</Box>
					</Box>
					<hr style={{ margin: '1.2rem 0 1.8rem 0' }} />
					{
						item.details.map((it, ind1) => (
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
				</>
			))
		}
	</Box>
  )
}

export default BoxContainer;

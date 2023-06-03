import { Box, CircularProgress } from "@material-ui/core"

const BackDrop = ({ open }) => {

	if (!open) return null;

	return (
		<Box style={{ 
				position: 'fixed',
				backgroundColor: 'black',
				opacity: 0.5,
				zIndex: 100,
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<CircularProgress color="primary" />
		</Box>
	)
}

export default BackDrop;
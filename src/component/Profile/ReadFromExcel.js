import { useState, useEffect } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import * as XLSX from "xlsx";
import { Alert, Snackbar } from '@mui/material';
import { Box, Button, makeStyles } from '@material-ui/core';
import FileUpload from "react-material-file-upload";
import Axios from '../common/Axios';

const useStyles = makeStyles(() => {
	return {
		btnStyle: {
			fontWeight: 700,
			marginTop: '30px',
			padding: '0.5rem 2rem',
			borderRadius: '8px',
			margin: '0 auto',
			display: 'flex',
		},
	}
});

const ReadFromExcel = ({ setLoading, type }) => {
  const [data, setData] = useState([]);
  const [rowHeader, setRowHeader] = useState([]);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [hover, setHover] = useState(false);
  const [success, setSuccess] = useState(false);
  const classes = useStyles();

  const readExcel = (file) => {
	const fileReader = new FileReader();
		fileReader.readAsArrayBuffer(file);

		fileReader.onload = (e) => {
		const bufferArray = e.target.result;

		const wb = XLSX.read(bufferArray, { type: "buffer" });

		const wsname = wb.SheetNames[0];

		const ws = wb.Sheets[wsname];

		const data = XLSX.utils.sheet_to_json(ws);
		console.log(data);
		setData(data);
		let arr = [];
		for (const [key, value] of Object.entries(data[0])) {
			arr.push(key);
		}
		setRowHeader(arr);
	}

	fileReader.onerror = (error) => {
		setError(error);
	};
  };
  useEffect(() => {
	if (files?.length) readExcel(files[0]);
	if (!files?.length) {
		setData([]);
		setRowHeader([]);
	}
  }, [files]);

  const handleSubmit = async () => {
	setLoading(true);
	try {
		await Axios.post('/data/upload', { data: data, type: type});
		setSuccess(true);
		setData([]);
		setRowHeader([]);
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
	<Box style={{ width: '92%' }}>
		<Snackbar 
			style={{ 
				width: '100%',
				margin: window.innerWidth < 900 ? '10px 0' : '10px 13%', 
				display: 'flex', 
				justifyContent: 'center' 
			}} 
			open={success} 
		>
			<Alert severity="success">File has been successfully uploaded</Alert>
		</Snackbar>
		<FileUpload
			accept=".xlsx"
			value={files}
			onChange={setFiles}
		/>
		<Button
			style={{
				backgroundColor: hover || !data.length ? '#8AFF8A' : '#00D100',
				color: hover || !data.length ? '#282828' : '#FFF',
			}}
			className={classes.btnStyle}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={handleSubmit}
			disabled={!data.length}
		>
			Submit
		</Button>
		<TableContainer style={{ marginTop: '50px' }} component={Paper}>
			<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
				<TableHead>
				<TableRow>
					{
						rowHeader && rowHeader.map((item, ind) => (
							<TableCell sx={{ fontWeight: 700, backgroundColor: '#7EC8E3' }} key={ind}>{item}</TableCell>
						))
					}
				</TableRow>
				</TableHead>
				<TableBody>
				{data.map((row, ind) => (
					<TableRow
						key={ind}
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						{
							rowHeader.map((item, index) => (
								<TableCell key={index}>{row?.[item]}</TableCell>
							))
						}
					</TableRow>
				))}
				</TableBody>
			</Table>
		</TableContainer>
	</Box>
  );
};

export default ReadFromExcel;

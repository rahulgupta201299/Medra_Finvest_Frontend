import { useState } from "react";
import * as XLSX from "xlsx";

const ReadFromExcel = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

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
	}

	fileReader.onerror = (error) => {
		setError(error);
	};
  };

  return (
    <input
      type="file"
	  accept=".xlsx"
      onChange={(e) => {
        const file = e.target.files[0];
        readExcel(file);
      }}
    />
  );
};

export default ReadFromExcel;

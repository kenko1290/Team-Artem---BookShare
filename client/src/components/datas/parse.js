import { readString } from "react-papaparse";
import collegesCSV from "../../components/datas/colleges.csv";
import majorsCSV from "../../components/datas/majors.csv";

// pass a setter of a state variable to the function
export default function Parse(setUniData, setMajorData) {
	const UniConfig = {
		header: true,
		complete: (results) => {
			setUniData(results.data.map((list) => list.college));
		},
		download: true,
		error: (error, file) => {
			console.log("Error while parsing:", error, file);
		},
	};

	const MajorConfig = {
		header: true,
		complete: (results) => {
			setMajorData(results.data.map((list) => list.Major));
		},
		download: true,
		error: (error, file) => {
			console.log("Error while parsing:", error, file);
		},
	};
	readString(majorsCSV, MajorConfig);
	readString(collegesCSV, UniConfig);
}

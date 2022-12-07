import { readString } from "react-papaparse";
import collegesCSV from "./colleges.csv";
import majorsCSV from "./majors.csv"
import { useState } from "react";

function EditProfile() {
	const [UniData, setUniData] = useState([]);
	const [MajorData, setMajorData] = useState([]);

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

	return (
		<div className="card">
			<div className="card-body">
				<p>Make Edits Below To Change Your Profile Looks</p>
				<form className="profile-form">
					<label htmlFor="fname">First name: </label>
					<input type="text" id="fname" name="fname"></input>

					<br></br>

					<label htmlFor="lname">Last name: </label>
					<input type="text" id="lname" name="lname"></input>

					<br></br>

					<label htmlFor="college">College: </label>
					<input list="college" />
					<datalist id="college">
						{UniData.map((college,key) => (
							<option key={key} value={college}></option>
						))}
					</datalist>

					<br></br>

					<label htmlFor="major">Major: </label>
					<input list="major" />
					<datalist id="major">
						{MajorData.map((major, key) => (
							<option key={key} value={major}></option>
						))}
					</datalist>

					<br></br>

					<label htmlFor="year">Year: </label>
					<input list="year" />
					<datalist id="year">
						<option value="Freshman"></option>
						<option value="Sophomore"></option>
						<option value="Junior"></option>
						<option value="Senior"></option>
					</datalist>

					<br></br>
					<br></br>

					<label htmlFor="about">About me: </label>
					<br></br>
					<textarea
						id="about"
						name="about"
						rows="3"
						cols="30"
						placeholder="I like coding..."
					></textarea>
				</form>
			</div>
		</div>
	);
}

export default EditProfile;

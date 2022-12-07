import { readString } from "react-papaparse";
import collegesCSV from "./colleges.csv";
import majorsCSV from "./majors.csv"
import { useState, useEffect } from "react";
import axios from "axios";

function EditProfile() {
	const [UniData, setUniData] = useState([]);
	const [MajorData, setMajorData] = useState([]);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [college, setCollege] = useState("");
	const [major, setMajor] = useState("");
	const [year, setYear] = useState("");
	const [aboutMe, setAboutMe] = useState("");

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

	
  function handleSaveChanges(event){
	let profileChanges = {
		firstName, lastName, college, major, year, aboutMe
	};
	async function saveChanges(){
		try{
		  await axios.post("/api/", profileChanges);
		} catch (error) {
		  console.error("Error posting");
		}
	  }
	  saveChanges();
  	};

	return (
		<div className="card">
			<div className="card-body">
				<p>Make Edits Below To Change Your Profile Looks</p>
				<form className="profile-form">
					<label htmlFor="fname">First name: </label>
					<input type="text" id="fname" name="fname" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>

					<br></br>

					<label htmlFor="lname">Last name: </label>
					<input type="text" id="lname" name="lname" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>

					<br></br>

					<label htmlFor="college">College: </label>
					<input list="college" value={college} onChange={(e) => setCollege(e.target.value)}/>
					<datalist id="college">
						{UniData.map((college,key) => (
							<option key={key} value={college}></option>
						))}
					</datalist>

					<br></br>

					<label htmlFor="major">Major: </label>
					<input list="major" value={major} onChange={(e) => setMajor(e.target.value)}/>
					<datalist id="major">
						{MajorData.map((major, key) => (
							<option key={key} value={major}></option>
						))}
					</datalist>

					<br></br>

					<label htmlFor="year">Year: </label>
					<input list="year" value={year} onChange={(e) => setYear(e.target.value)}/>
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
						value={aboutMe} onChange={(e) => setAboutMe(e.target.value)}
					></textarea>
					<button onClick={handleSaveChanges}>Save Changes</button>
				</form>
				
			</div>
		</div>
	);
}

export default EditProfile;

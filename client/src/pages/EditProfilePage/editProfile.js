import Parse from "../../components/datas/parse";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

function EditProfile({ user }) {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [UniData, setUniData] = useState([]);
	const [MajorData, setMajorData] = useState([]);
	const [loading, setLoading] = useState(false);

	Parse(setUniData, setMajorData);

	const editProfile = async (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData();
		const fname = e.target.fname.value;
		const lname = e.target.lname.value;
		const about = e.target.about.value;
		const major = e.target.major.value;
		const year = e.target.year.value;
		const college = e.target.college.value;
		formData.append("firstName", fname);
		formData.append("lastName", lname);
		formData.append("aboutMe", about);
		formData.append("major", major);
		formData.append("year", year);
		formData.append("college", college);
		const data = {};
		formData.forEach((value, key) => {
			data[key] = value;
		});
		try {
			let response = await fetch("/api/auth/update/profile", {
				method: "PUT",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (response.ok) {
				setSuccess(true);
			} else {
				setError(true);
			}
		} catch (err) {
			console.error("Server error while saving user profile", error);
			console.log("\n data: \n", formData);
			setError(true);
		} finally{
			setLoading(false);
		}
	};
	if(loading) return <LoadingSpinner />
	if (success) return <Navigate to="/profile" />;

	return (
		<div className="card">
			<div className="card-body">
				<p>Make Edits Below To Change Your Profile Looks</p>
				<form className="profile-form" onSubmit={editProfile}>
					<div className="row">
						<label htmlFor="fname" className="col-6 mx-3">
							First Name:{" "}
						</label>
						<input
							type="text"
							id="fname"
							name="fname"
							className="col-4 px-2"
							placeholder={user.firstName}
						></input>
					</div>

					<br></br>

					<div className="row">
						<label htmlFor="lname" className="col-6 mx-3">
							Last name:{" "}
						</label>
						<input
							type="text"
							id="lname"
							name="lname"
							className="col-4 px-2"
							placeholder={user.lastName}
						></input>
					</div>

					<br></br>

					<label htmlFor="college">College: </label>

					<select id="college" name="college">
						<option value={user.college}>{user.college}</option>
						{UniData.map((college, key) => (
							<option key={key} value={college}>
								{college}
							</option>
						))}
					</select>

					<br></br>

					<label htmlFor="major">Major: </label>
					<select id="major" name="major">
						<option value={user.major}>{user.major}</option>
						{MajorData.map((major, key) => (
							<option key={key} value={major}>
								{major}
							</option>
						))}
					</select>

					<br></br>

					<label htmlFor="year">Year: </label>
					<select id="year" name="year">
						<option value={user.year}>{user.year}</option>
						<option value="Freshman">Freshman</option>
						<option value="Sophomore">Sophomore</option>
						<option value="Junior">Junior</option>
						<option value="Senior">Senior</option>
					</select>

					<br></br>
					<br></br>

					<label htmlFor="about">AboutMe: </label>
					<br></br>
					<input
						id="about"
						name="about"
						rows="3"
						cols="30"
						placeholder={
							user.aboutMe ? user.aboutMe : "Tell us about yourself!"
						}
					></input>
					{/* make a Button to save changes */}
					<br></br>
					<button type="submit">Save Changes</button>
				</form>
			</div>
		</div>
	);
}

export default EditProfile;

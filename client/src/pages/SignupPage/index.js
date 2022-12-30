import BookNavbar from "../../components/Navbar";
import Parse from "../../components/datas/parse";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ErrorAlert from "../../components/ErrorAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

function SignupPage() {
	const [UniData, setUniData] = useState([]);
	const [MajorData, setMajorData] = useState([]);
	Parse(setUniData, setMajorData);

	const [passwordShown, setPasswordShown] = useState(false);
	const [eyeSlashShown, setEyeSlashShown] = useState(true);
	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
		setEyeSlashShown(eyeSlashShown ? false : true);
	};

	const [userData, setUserData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		college: "",
		major: "",
		year: "",
	});

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const fieldChanged = (name) => {
		return (event) => {
			let { value } = event.target;
			setUserData((prevData) => ({ ...prevData, [name]: value }));
		};
	};

	const signUp = async (e) => {
		e.preventDefault();
		let { firstName, lastName, email, password, college, major, year } =
			userData;

		try {
			let response = await fetch("/api/auth/signup", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					email: email,
					password: password,
					college: college,
					major: major,
					year: year,
				}),
			});

			if (response.ok) {
				setSuccess(true);
			} else {
				setError(true);
			}
		} catch (error) {
			console.error("Server error while creating a new user", error);
			console.log("\n data: \n", userData);
			setError(true);
		}
	};

	if (success) return <Navigate to="/login" />;
	return (
		<div>
			{/* make logout false in BookNavbar */}
			<BookNavbar displayLogout={false} />
			{error && <ErrorAlert details={"Failed to save the content"} />}
			<div class="container text-center overflow-hidden">
				<form style={{ paddingTop: "5%" }} onSubmit={signUp}>
					<div class="row mb-4">
						<div class="col"></div>
						<input
							className="col-3 rounded"
							type="text"
							name="firstName"
							placeholder="First name"
							value={userData.firstName}
							onChange={fieldChanged("firstName")}
							autoFocus
							required
						/>
						<div class="col"></div>
					</div>
					<div class="row mb-4">
						<div class="col"></div>
						<input
							class="col-3 rounded"
							type="text"
							name="lastName"
							placeholder="Last name"
							value={userData.lastName}
							onChange={fieldChanged("lastName")}
							autoFocus
							required
						/>
						<div class="col"></div>
					</div>
					<div class="row mb-4">
						<div class="col"></div>
						<input
							class="col-3 rounded"
							type="email"
							name="email"
							placeholder="Email"
							value={userData.email}
							onChange={fieldChanged("email")}
							autoFocus
							required
						/>
						<div class="col"></div>
					</div>
					<div class="row mb-4">
						<div class="col"></div>
						<div class="col">
							<input
								class="col-10 rounded"
								type={passwordShown ? "text" : "password"}
								name="password"
								placeholder="Password"
								value={userData.password}
								onChange={fieldChanged("password")}
								autoFocus
								id="password"
								required
							/>
							{/* add I for faeye */}
							<i
								onClick={togglePasswordVisiblity}
								style={{ position: "absolute", left: "59%" }}
							>
								{eyeSlashShown ? eye : eyeSlash}
							</i>
						</div>

						<div class="col"></div>
					</div>

					<div class="row mb-4">
						<div class="col"></div>
						<input
							class="col-3 rounded"
							type="text"
							list="college"
							placeholder="College"
							name="college"
							value={userData.college}
							onChange={fieldChanged("college")}
							autoFocus
						/>
						<datalist id="college">
							{UniData.map((college, key) => (
								<option key={key} value={college}>
									{college}
								</option>
							))}
						</datalist>
						<div class="col"></div>
					</div>
					<div class="row mb-4">
						<div class="col"></div>
						<input
							class="col-3 rounded"
							list="major"
							placeholder="Major"
							name="major"
							value={userData.major}
							onChange={fieldChanged("major")}
							autoFocus
						/>
						<datalist id="major">
							{MajorData.map((major, key) => (
								<option key={key} value={major}>
									{major}
								</option>
							))}
						</datalist>
						<div class="col"></div>
					</div>
					<div class="row mb-4">
						<div class="col"></div>
						<input
							class="col-3 rounded"
							list="year"
							placeholder="Year"
							name="year"
							value={userData.year}
							onChange={fieldChanged("year")}
							autoFocus
						/>
						<datalist id="year">
							<option value="Freshman">Freshman</option>
							<option value="Sophomore">Sophomore</option>
							<option value="Junior">Junior</option>
							<option value="Senior">Senior</option>
						</datalist>
						<div class="col"></div>
					</div>
					<div class="row mb-2">
						<div class="col"></div>
						<button
							type="submit"
							class="col-3 rounded bg-primary text-white px-6 py-2 mb-1"
							style={{ border: "none" }}
						>
							Create account
						</button>
						<div class="col"></div>
					</div>
					<div class="row mb-2">
						<div class="col"></div>
						<a class="col-2" href="/login" style={{ textDecoration: "none" }}>
							Login
						</a>
						<div class="col"></div>
					</div>
				</form>
			</div>
		</div>
	);
}
export default SignupPage;

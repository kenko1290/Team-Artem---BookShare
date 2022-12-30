import BookNavbar from "../../components/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function LoginPage({ success = false }) {
	const auth = useAuth();
	const navigate = useNavigate();
	const [userData, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState(false);

	const from = "/home";

	const fieldChanged = (name) => {
		return (event) => {
			let { value } = event.target;
			setData((prevData) => ({ ...prevData, [name]: value }));
		};
	};

	const login = async (e) => {
		e.preventDefault();
		let { email, password } = userData;
		try {
			await auth.authenticate(email, password);
			// setRedirectToReferrer(true); // used in react-router v5
			// in react-router v6 navigate changes the pages directly.
			// comment from official docs example:
			//    Send them back to the page they tried to visit when they were
			//    redirected to the login page. Use { replace: true } so we don't create
			//    another entry in the history stack for the login page.  This means that
			//    when they get to the protected page and click the back button, they
			//    won't end up back on the login page, which is also really nice for the
			//    user experience.
			navigate(from, { replace: true });
		} catch (error) {
			setError(true);
		}
	};

	let errorMessage = "";
	if (error) {
		errorMessage = (
			<div className="alert alert-danger" role="alert">
				Login Failed
			</div>
		);
	}

	return (
		<div>
			<BookNavbar displayLogout={false} />
			{success && (
				<strong style={{ color: "red" }}>
					Success Sign Up, now please Log in
				</strong>
			)}
			{errorMessage}
			<div class="container text-center overflow-hidden">
				<form style={{ paddingTop: "15%" }} onSubmit={login}>
					<div class="row mb-4">
						<div class="col"></div>
						<input
							className="col-3 rounded"
							type="email"
							name="email"
							placeholder="Email"
							value={userData.email}
							onChange={fieldChanged("email")}
						/>
						<div class="col"></div>
					</div>
					<div class="row mb-4">
						<div class="col"></div>
						<input
							class="col-3 rounded"
							type="password"
							placeholder="Password"
							name="password"
							value={userData.password}
							onChange={fieldChanged("password")}
						/>
						<div class="col"></div>
					</div>
					<div class="row mb-2">
						<div class="col"></div>
						<button
							type="submit"
							class="col-1 rounded bg-primary text-white px-3 py-3 mb-1"
							style={{ border: "none" }}
						>
							Login
						</button>
						<div class="col"></div>
					</div>
					<div class="row mb-2">
						<div class="col"></div>
						<a class="col-2" href="/sign-up" style={{ textDecoration: "none" }}>
							Register now
						</a>
						<div class="col"></div>
					</div>
				</form>
			</div>
		</div>
	);
}
export default LoginPage;

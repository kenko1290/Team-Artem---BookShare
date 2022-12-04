//import user from "./user_info";

function Profile(props) {
	return (
		<div className="card">
			<div className="card-body">
				<form className="profile-form">
					<p>
						<strong>First name: </strong> {props.userInfo.fname}
					</p>

					<p>
						<strong>Last name: </strong>
						{props.userInfo.lname}
					</p>

					<p>
						<strong>College: </strong> {props.userInfo.college}
					</p>

					<p>
						<strong>Major: </strong> {props.userInfo.major}
					</p>

					<p>
						<strong>Year: </strong>
						{props.userInfo.year}
					</p>

					<br></br>

					<p>
						<strong>About Me:</strong>
					</p>
					<p>{props.userInfo.about}</p>
				</form>
			</div>
		</div>
	);
}

export default Profile;

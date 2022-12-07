import user from "./user_info";

function Profile() {
	return (
		<div className="card">
			<div className="card-body">
				<form className="profile-form">
					<p>
						<strong>First name: </strong> {user.fname}
					</p>

					<p>
						<strong>Last name: </strong>
						{user.lname}
					</p>

					<p>
						<strong>College: </strong> {user.college}
					</p>

					<p>
						<strong>Major: </strong> {user.major}
					</p>

					<p>
						<strong>Year: </strong>
						{user.year}
					</p>

					<br></br>

					<p>
						<strong>About Me:</strong>
					</p>
					<p>{user.about}</p>
				</form>
			</div>
		</div>
	);
}

export default Profile;

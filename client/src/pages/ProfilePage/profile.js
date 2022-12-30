// import user from "../../components/datas/user_info";

function Profile({user}) {
	return (
		<div className="card">
			<div className="card-body">
				<form className="profile-form">
					<p>
						<strong>First name: </strong> {user.firstName}
					</p>

					<p>
						<strong>Last name: </strong>
						{user.lastName}
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
					<p>{user.aboutMe}</p>
				</form>
			</div>
		</div>
	);
}

export default Profile;

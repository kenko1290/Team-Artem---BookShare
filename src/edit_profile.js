function EditProfile() {
	return (
		<div>
			<p>Make edits below to change your profile</p>
			<form>
				<label for="fname">First name: </label>
				<br></br>
				<input type="text" id="fname" name="fname"></input>

				<br></br>

				<label for="lname">Last name: </label>
				<br></br>
				<input type="text" id="lname" name="lname"></input>

                <br></br>

				<label for="college">College: </label>
				<br></br>
				<input type="text" id="college" name="college"></input>

                <br></br>

				<label for="major">Major: </label>
				<br></br>
				<input type="text" id="major" name="major"></input>

                <br></br>

				<label for="year">Year: </label>
				<br></br>
				<input type="text" id="year" name="year"></input>

                <br></br>
                <br></br>
                <label for="about">About me: </label>
				<br></br>
				<textarea id="about" name="about" rows="3" cols="30" placeholder="I like coding..."></textarea>
			</form>
		</div>
	);
}

export default EditProfile;

function Settings(userInfo) {
	return (
		<div>
			<div className="card">
				<div class="card-body">
					<p class="card-text">
						Email: {userInfo.email} &nbsp;
						{/* <a href="/#">Change Email</a> */}
					</p>
					
					{/*<p class="card-text">
						Phone: {userInfo.phone} &nbsp;
						<a href="/#">Change Phone Number</a>
					</p>
					 <p class="card-text">
						Password: {userInfo.password} &nbsp;
						<a href="/#">Change Password</a>
					</p>
					<p class="card-text">
						2FA: {userInfo.twofactorauth} &nbsp;
						<a href="/#">Enable/Disable</a>
					</p>
					<p class="card-text">
						Notifications: {userInfo.notify} &nbsp;
						<a href="/#">Enable/Disable</a>
					</p> */}
				</div>
			</div>

			{/* <div className="card">
				<div class="card-body">
					<p class="card-text">
						Who Can Send Me Private Messages?
						<br></br>
						<input
							className="form-check-input"
							type="radio"
							value="anyone"
							id="anyone"
                            name="dm"
                            checked
						>
						</input>
                        <label className="form-check-label" for="anyone">Anyone</label>
                        
                        <input
							className="form-check-input"
							type="radio"
							value="fromschool"
							id="fromschool"
                            name="dm"
						>
						</input>
                        <label className="form-check-label" for="fromschool">People from My School</label>

                        <input
							className="form-check-input"
							type="radio"
							value="noone"
							id="noone"
                            name="dm"
						>
						</input>
                        <label className="form-check-label" for="noone">No One</label>

					</p>

                    <p class="card-text">
						Make My Email Address Visible to:?
						<br></br>
						<input
							className="form-check-input"
							type="radio"
							value="anyone"
							id="anyone"
                            name="emailvisible"
                            checked
						>
						</input>
                        <label className="form-check-label" for="anyone">Anyone</label>
                        
                        <input
							className="form-check-input"
							type="radio"
							value="fromschool"
							id="fromschool"
                            name="emailvisible"
						>
						</input>
                        <label className="form-check-label" for="fromschool">People from My School</label>

                        <input
							className="form-check-input"
							type="radio"
							value="noone"
							id="noone"
                            name="emailvisible"
						>
						</input>
                        <label className="form-check-label" for="noone">No One</label>

					</p>

                    <p class="card-text">
						Make My Phone Number Visible to:
						<br></br>
						<input
							className="form-check-input"
							type="radio"
							value="anyone"
							id="anyone"
                            name="phonevisible"
                            checked
						>
						</input>
                        <label className="form-check-label" for="anyone">Anyone</label>
                        
                        <input
							className="form-check-input"
							type="radio"
							value="fromschool"
							id="fromschool"
                            name="phonevisible"
						>
						</input>
                        <label className="form-check-label" for="fromschool">People from My School</label>

                        <input
							className="form-check-input"
							type="radio"
							value="noone"
							id="noone"
                            name="phonevisible"
						>
						</input>
                        <label className="form-check-label" for="noone">No One</label>

					</p>
                    
				</div>
			</div> */}
		</div>
	);
}

export default Settings;

import BookNavbar from "../../components/Navbar";
import SideBar from "../../components/SideBar/sideBar";
import Profile from "./profile";
import { useAuth } from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner";

function ProfilePage() {
	const auth = useAuth();
	const userInfo = auth.user;
	return (
		<div>
			<BookNavbar />
			<div class="container-fluid">
				<div class="row mb-4">
					<div class="col-2 fw-bold">
						{
							<SideBar
								nav="profile"
								name={userInfo.firstName + " " + userInfo.lastName}
							/>
						}
					</div>
					<div
						class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0"
						style={{ paddingLeft: "50px", paddingTop: "20px" }}
					>
						{<Profile user={userInfo} />}
					</div>
				</div>
			</div>
		</div>
	);
}
export default ProfilePage;

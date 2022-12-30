import BookNavbar from "../../components/Navbar";
import SideBar from "../../components/SideBar/sideBar";
import EditProfile from "./editProfile";
import { useAuth } from "../../context/AuthContext";

function ProfilePage() {
	return (
		<div>
			<BookNavbar />
			<div class="container-fluid">
				<div class="row mb-4">
					<div class="col-2 fw-bold">
						<SideBar nav="profileEdit" />
					</div>
					<div
						class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0"
						style={{ paddingLeft: "50px", paddingTop: "20px"}}
					>
						{<EditProfile user={useAuth().user} />}
					</div>
				</div>
			</div>
		</div>
	);
}
export default ProfilePage;

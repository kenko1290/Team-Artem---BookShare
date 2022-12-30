import NewNav from "../../components/Navbar";
import Settings from "./settings";
import SideBar from "../../components/SideBar/sideBar";
import { useAuth } from "../../context/AuthContext";

function SettingsPage() {
	return (
		<div>
			<NewNav />
			<div class="container-fluid">
				<div class="row mb-4">
					<div class="col-2 fw-bold">
						<SideBar nav="settings" />
					</div>
					<div
						class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0"
						style={{ paddingLeft: "50px", paddingTop: "20px" }}
					>
						{<Settings email={useAuth().user.email}/>}
					</div>
				</div>
			</div>
		</div>
	);
}
export default SettingsPage;

import NewNav from "../components/NewNav";
import Profile from "../components/profile/profile";
import SideBar from "../components/SideBar/sideBar";

function ProfilePage() {
  return (
      <div>
        <NewNav />
        <div class="container-fluid">
          <div class="row mb-4">
            <div class="col-2 fw-bold"><SideBar nav="profile"/></div>
            <div class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0" style={{paddingLeft:"50px", paddingTop:"20px"}}>{<Profile />}</div>
          </div>
        </div>
      </div>
  );
}
export default ProfilePage;
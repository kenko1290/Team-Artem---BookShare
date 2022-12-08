import NewNav from "../components/NewNav";
import SideBar from "../components/SideBar/sideBar";
import EditProfile from "../../edit_profile/edit_profile";
import React, {useState, useEffect} from "react"
import axios from "axios";

function ProfilePage() {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    async function getData(){
      try{
        let response = await axios.get("/api/");
        let userInfo = response.data;
        setUserInfo(userInfo);

      } catch (error) {
        console.error("Error fetching");
      }
    }
    getData();
  }, []);
  return (
      <div>
        <NewNav />
        <div class="container-fluid">
          <div class="row mb-4">
            <div class="col-2 fw-bold"><SideBar nav="profileEdit"/></div>
            <div class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0" style={{paddingLeft:"50px", paddingTop:"20px"}}>{<EditProfile />}</div>
          </div>
        </div>
      </div>
  );
}
export default ProfilePage;
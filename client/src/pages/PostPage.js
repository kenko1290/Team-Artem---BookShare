//import classes from "./PostPage.module.css";
import NewNav from "../components/NewNav";
import PostBookForm from "../components/PostBookForm";
import SideBar from "../components/SideBar/sideBar";
import React, {useState} from "react"

function PostPage() {

  const [tab, setTab] = useState("lendBook");

  function handleTab(newTab){
    setTab(newTab);
  }

  return (
      <div>
        <NewNav />
        <div class="container-fluid">
          <div class="row mb-4">
            <div class="col-2 fw-bold"><SideBar nav="post" changeTab={handleTab} /></div>
            <div class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0" style={{paddingLeft:"50px", paddingTop:"20px"}}>{<PostBookForm currentTab={tab}/>}</div>
          </div>
        </div>
      </div>
  );
}
export default PostPage;
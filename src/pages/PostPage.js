//import classes from "./PostPage.module.css";
import Navbar from "../components/Navbar";
import PostBookForm from "../components/PostBookForm";
import SideBar from "../components/SideBar/sideBar";

function PostPage() {
  return (
    <div>
      <Navbar />
      <div class="container-fluid">
        <div class="row mb-4">
          <div class="col-2 fw-bold">{<SideBar/>}</div>
          <div class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0" style={{paddingLeft:"50px", paddingTop:"20px"}}>{<PostBookForm />}</div>
        </div>
      </div>
    </div>
  );
}
export default PostPage;
import BookList from "../components/BookList";
import NewNav from "../components/NewNav";
import SideBar from "../components/SideBar/sideBar";

export default function HomePage1() {
    return (
        <>
            <NewNav />
            <div class="container-fluid">
            <div class="row mb-4">
                <div class="col-2 fw-bold"><SideBar nav="home"/></div>
                <div class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0" style={{paddingLeft:"50px", paddingTop:"20px"}}>{<BookList />}</div>
            </div>
            </div>
        </>
    )
}
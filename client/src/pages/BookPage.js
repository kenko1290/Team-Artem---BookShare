import React from "react";
import SideBar from "../components/SideBar/sideBar";
import NewNav from "../components/NewNav";
import BookInfo from "../components/BookInfo";

function BookPage (){
    return (
        <div>
            <NewNav />
            <div class="container-fluid">
            <div class="row mb-4">
                <div class="col-2 fw-bold"><SideBar nav="bookPage" /></div>
                <div class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0" style={{paddingLeft:"50px", paddingTop:"20px"}}>{<BookInfo />}</div>
            </div>
            </div>
        </div>
    );
    }

export default BookPage;

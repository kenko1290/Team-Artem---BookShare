import BookList from "../components/BookList";
import NewNav from "../components/NewNav";
import SideBar from "../components/SideBar/sideBar";
import React, {useState, useEffect} from "react"
import axios from "axios";

export default function HomePage1() {
    const [books, setBooks] = useState([]);
    const [tab, setTab] = useState("");

    useEffect(() => {
        async function getData(){
          try{
            let booksResponse = await axios.get("/api/");
            let booksData = booksResponse.data;
            setBooks(booksData);
          } catch (error) {
            console.error("Error fetching");
          }
        }
        getData();
      }, []);
    
    function handleTab(newTab){
        setTab(newTab);
    }

    return (
        <>
            <NewNav />
            <div class="container-fluid">
            <div class="row mb-4">
                <div class="col-2 fw-bold"> <SideBar nav="home" changeTab={handleTab} /> </div>
                <div class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0" style={{paddingLeft:"50px", paddingTop:"20px"}}>{<BookList bookList={books} />}</div>
            </div>
            </div>
        </>
    )
}
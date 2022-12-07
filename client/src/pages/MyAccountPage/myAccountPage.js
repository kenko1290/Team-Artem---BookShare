import React, {useState, useEffect} from "react"
import SideBar from "../../components/SideBar/sideBar"
import BookInfoCardList from "../../components/BookInfoCardList/bookInfoCardList"
import NewNav from "../../components/NewNav";
import axios from "axios";

 
export default function MyAccountPage(){

  const [booksBorrowed, setBooksBorrowed] = useState([]);
  const [booksOwned, setBooksOwned] = useState([]);
  const [booksLent, setBookslent] = useState([]);
  const [tab, setTab] = useState("booksBorrowed");

  useEffect(() => {
    async function getData(){
      try{
        let booksBorrowedResponse = await axios.get("/api/");
        let booksBorrowedData = booksBorrowedResponse.data;
        setBooksBorrowed(booksBorrowedData);

        let booksOwnedResponse = await axios.get("/api/");
        let booksOwnedData = booksOwnedResponse.data;
        setBooksOwned(booksOwnedData);

        let booksLentResponse = await axios.get("/api/");
        let booksLentData = booksLentResponse.data;
        setBookslent(booksLent.data);

      } catch (error) {
        console.error("Error fetching");
      }
    }
    getData();
  }, []);

  function handleTab(newTab){
    setTab(newTab);
  }
  const myAccountPage = 
  <div>
      <SideBar nav="myAccount" changeTab={handleTab} />
      <BookInfoCardList bookBorrowedList={booksBorrowed} bookOwnedList={booksOwned} bookLentList={booksLent} currentTab={tab} />
  </div>

  return myAccountPage;
}

/*let currentTab = "booksBorrowed";
const books = [
  {
    id: 0,
    title: "Test Title1",
    author: "John Doe1",
    bookImage: "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
    date: "00/00/0000",
    profileImage: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
    profileName: "Average Joe1",
  },

  {
    id: 1,
    title: "Test Title2",
    author: "John Doe2",
    bookImage: "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
    date: "00/00/0000",
    profileImage: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
    profileName: "Average Joe2",
  },

  {
    id: 2,
    title: "Test Title3",
    author: "John Doe3",
    bookImage: "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
    date: "00/00/0000",
    profileImage: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
    profileName: "Average Joe3"
  }
] */
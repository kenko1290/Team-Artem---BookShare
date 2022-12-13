import React, {useState, useEffect} from "react"
import SideBar from "../../components/SideBar/sideBar"
import BookInfoCardList from "../../components/BookInfoCardList/bookInfoCardList"
import axios from "axios";
import NewNav from "../../components/NewNav";

export default function RequestsPage(){
  const [myRequests, setMyRequests] = useState([]);
  const [otherPeopleRequests, setOtherPeopleRequests] = useState([]);
  const [tab, setTab] = useState("myRequests");

  useEffect(() => {
    async function getData(){
      try{
        let myRequestsResponse = await axios.get("/api/textbooks/myRequests/");
        let myRequestsData = myRequestsResponse.data;
        setMyRequests(myRequests);

        let otherPeopleRequestsResponse = await axios.get("/api/otherPeopleRequests");
        let otherPeopleRequestsData = otherPeopleRequestsResponse.data
        setOtherPeopleRequests(otherPeopleRequests);
      } catch (error) {
        console.error("Error fetching");
      }
    }
    getData();
  }, []);

  function handleTab(newTab){
    setTab(newTab);
  }
  const books1 = [
    {
      id: "1",
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      edition: "3rd",
      format: "Physical",
      sharing: "donated",
      availability: "Available",
      location: "Hunter",
      date: "01/22/23",
      time: "01:00pm",
      bookImage: "https://m.media-amazon.com/images/I/51InjRPaF7L._AC_SY780_.jpg",
      profileImage: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
      profileName: "Some User"

    }
]
const books2 = [
  {
    id: "1",
    title: "Computer Organization and Design, MIPS Edition",
    author: "David A. Patterson & John L. Hennessy",
    edition: "6th",
    format: "e-book",
    sharing: "donated",
    availability: "Available",
    location: "Discord",
    date: "10/30/2022",
    time: "12:00pm",
    bookImage: "https://m.media-amazon.com/images/P/0128201096.01._SCLZZZZZZZ_SX500_.jpg",
    profileImage: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
    profileName: "Another User"
  }
]
  const requestsPage = 
  <div>
      <NewNav />
      <SideBar nav="requests" changeTab={handleTab} />
      <BookInfoCardList myRequests={books1} otherPeopleRequests={books2} tab={tab} />
  </div>
  return requestsPage;
}

/* const books = [
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

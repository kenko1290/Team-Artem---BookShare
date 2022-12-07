import React, {useState, useEffect} from "react"
import SideBar from "../../components/SideBar/sideBar"
import BookInfoCardList from "../../components/BookInfoCardList/bookInfoCardList"
import axios from "axios";

export default function RequestsPage(){
  const [myRequests, setMyRequests] = useState([]);
  const [otherPeopleRequests, setOtherPeopleRequests] = useState([]);
  const [tab, setTab] = useState("myRequests");

  useEffect(() => {
    async function getData(){
      try{
        let myRequestsResponse = await axios.get("/api/myRequests/");
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
  const requestsPage = 
  <div>
      <SideBar nav="requests" changeTab={handleTab} />
      <BookInfoCardList myRequestsList={myRequests} otherPeopleRequestsList={otherPeopleRequests} currentTab={tab} />
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

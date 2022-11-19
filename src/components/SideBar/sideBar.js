import React from "react";
import "./sideBar.css"
import ProfileCard from "./UserProfileCard/profileCard";

function SideBar(props){
    let nav = {props};
    const homePageSideBar = 
    <div className="sideBarContainer">
            <h5>Filter By Classes</h5>
            <button className="d-block">class1</button>
            <button className="d-block">class2</button>
            <button className="d-block">class3</button>

            <h5>Filter By Availability</h5>
            <button className="d-block">available</button>
            <button className="d-block">not available</button>

            <h5>Filter By Sharing Type</h5>
            <button className="d-block">donated Books</button>
            <button className="d-block">lent Books</button>

            <button>Clear Filter</button>
    </div>

    const postPageSideBar = 
    <div className="sideBarContainer">
        <h5>Type Of Sharing</h5>
        <button className="d-block">Lend Book</button>
        <button className="d-block">Donate Book</button>
    </div>
    
    const requestsPageSideBar = 
    <div className="sideBarContainer">
        <h5>Requests</h5>
        <button className="d-block"> My Requests For Books</button>
        <button className="d-block"> Requests For My Books  </button>
    </div>
    
    const myAccountPageSideBar = 
    <div className="sideBarContainer"> 
        <h5>My Account</h5>
        <button className="d-block">Boooks Burrowed</button>
        <button className="d-block">Books Owned</button>
        <button className="d-block">Books Lent</button>
        <button className="d-block">Books Donated</button>
        <button className="d-block">Books Saved</button>
        <button className="d-block">Messages</button>
    </div>

    const bookPageSideBar = 
    <div className="sideBarContainer">
        <div className="imageContainer">
            <img src="https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png" alt="book" />
        </div>

        <button className="d-block">Request Book</button>

        <button className="d-block">Save Book</button>

        <h5>Owner</h5>
        <ProfileCard />

        <button className="d-block">Message Owner</button>

    </div>
    
    const settingsPageSideBar = 
    <div className="sideBarContainer">
        <h5>Settings</h5>
        <button className="d-block">General</button>
        <button className="d-block">Privacy</button>
    </div>
    const progfilePageSideBar = 
    <div className="sideBarContainer">
        <ProfileCard />
        <button className="d-block">Edit Profile</button>
    </div>

    const profileEditsPageSideBar = 
    <div className="sideBarContainer">
        <ProfileCard />
        <button>Change Image</button>
        <button className="d-block">Save Changes</button>
    </div>

    if(nav === "home")
        return homePageSideBar;
    if(nav === "post")
        return postPageSideBar;
    if(nav === "requests")
        return requestsPageSideBar;
    if(nav === "myAccount")
        return myAccountPageSideBar;
    if(nav === "bookPage")
        return bookPageSideBar;
    if(nav === "settings")
        return settingsPageSideBar;
    if(nav === "profile")
        return progfilePageSideBar;
    if(nav === "profileEdit")
        return profileEditsPageSideBar;
};


export default SideBar
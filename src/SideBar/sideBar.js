import React from "react";
import "./sideBar.css"
import ProfileCard from "../UserProfileCard/profileCard";

function SideBar(){
    let nav = "profile";
    const homePageSideBar = 
    <div className="sideBarContainer">
            <h5>Filter By Classes</h5>
            <button class="d-block">class1</button>
            <button class="d-block">class2</button>
            <button class="d-block">class3</button>

            <h5>Filter By Availability</h5>
            <button class="d-block">available</button>
            <button class="d-block">not available</button>

            <h5>Filter By Sharing Type</h5>
            <button class="d-block">donated Books</button>
            <button class="d-block">lent Books</button>

            <button>Clear Filter</button>
    </div>

    const postPageSideBar = 
    <div className="sideBarContainer">
        <h5>Type Of Sharing</h5>
        <button class="d-block">Lend Book</button>
        <button class="d-block">Donate Book</button>
    </div>
    
    const requestsPageSideBar = 
    <div className="sideBarContainer">
        <h5>Requests</h5>
        <button class="d-block"> My Requests For Books</button>
        <button class="d-block"> Requests For My Books  </button>
    </div>
    
    const myAccountPageSideBar = 
    <div className="sideBarContainer"> 
        <h5>My Account</h5>
        <button class="d-block">Boooks Burrowed</button>
        <button class="d-block">Books Owned</button>
        <button class="d-block">Books Lent</button>
        <button class="d-block">Books Donated</button>
        <button class="d-block">Books Saved</button>
        <button class="d-block">Messages</button>
    </div>

    const bookPageSideBar = 
    <div className="sideBarContainer">
        <div className="imageContainer">
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="book" />
        </div>

        <button class="d-block">Request Book</button>

        <button class="d-block">Save Book</button>

        <h5>Owner</h5>
        <ProfileCard />

        <button class="d-block">Message Owner</button>

    </div>
    
    const settingsPageSideBar = 
    <div className="sideBarContainer">
        <h5>Settings</h5>
        <button class="d-block">General</button>
        <button class="d-block">Privacy</button>
    </div>
    const progfilePageSideBar = 
    <div className="sideBarContainer">
        <ProfileCard />
        <button class="d-block">Edit Profile</button>
    </div>

    const profileEditsPageSideBar = 
    <div className="sideBarContainer">
        <ProfileCard />
        <button>Change Image</button>
        <button class="d-block">Save Changes</button>
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
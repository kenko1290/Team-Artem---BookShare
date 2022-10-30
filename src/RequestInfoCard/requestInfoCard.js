import React from "react";
import "./requestInfoCard.css"
import ProfileCard from "../SideBar/UserProfileCard/profileCard";

function RequestInfoCard(){
    
    const testMyRequest = {
        title: "Test Title",
        author: "John Doe",
        bookImage: "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
        date: "00/00/0000",
        profileImage: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
        profileName: "Average Joe",
    }

    const testRequest = {
        title: "Test Title",
        author: "John Doe",
        bookImage: "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png",
        date: "00/00/0000",
        profileImage: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
        profileName: "Average Joe",
    }
    
    const requestInfo = 
    <div>
        <div className="container text-center">
            <div className="row">
                <div className="col"> Title </div>
                <div className="col"> Date Of Request </div>
                <div className="col"> Owner </div>
            </div>
        </div>
        <div className="container text-center card-container">
            <div className="row">
                <div className="col"> 
                    <div className="row">
                        <div className="col">
                            <img className="image-container" src="https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png" alt="book"/>
                        </div>
                        <div className="col"> 
                            <h6>{testMyRequest.title}</h6>  
                            <p>{testMyRequest.author}</p>
                        </div>
                    </div>
                
                </div>
                <div className="col"> {testMyRequest.date} </div>
                <div className="col"> <ProfileCard /> </div>
            </div>
        </div>

        <div className="container text-center">
            <div className="row">
                <div className="col"> Title </div>
                <div className="col"> Date Of Request </div>
                <div className="col"> User </div>
            </div>
        </div>
        <div className="container text-center card-container">
            <div className="row">
                <div className="col"> 
                    <div className="row">
                        <div className="col">
                            <img className="image-container" src="https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png" alt="book"/>
                        </div>
                        <div className="col"> 
                            <h6>{testMyRequest.title}</h6>  
                            <p>{testMyRequest.author}</p>
                        </div>
                    </div>
                
                </div>
                <div className="col"> {testMyRequest.date} </div>
                <div className="col"> <ProfileCard /> </div>
            </div>
            <div className="row">
                <div className="col"> <button>Approve</button><button>Denie</button> </div>
            </div>
        </div>
    </div>

    

    
    return requestInfo; 
}

export default RequestInfoCard;
import React from "react";
import "./bookInfoCard.css"
import ProfileCard from "../UserProfileCard/profileCard";

function BookInfoCard(props){
    const bookInfo = 
    <div>
        <div className="container text-center card-container">
            <div className="row">
                <div className="col"> 
                    <div className="row">
                        <div className="col">
                            <img className="image-container" src={props.bookImage? props.bookImage: "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png"} alt="book"/>
                        </div>
                        <div className="col"> 
                            <h6>{props.title}</h6>  
                            <p>{props.author}</p>
                        </div>
                    </div>
                
                </div>
                <div className="col"> {props.date} </div>
                <div className="col"> <ProfileCard user={props.profileName} profileImage={props.profileImage} /> </div>
            </div>
        </div>
    </div>

    const bookInfoApproveDeny = 
<div>

<div className="container text-center card-container">
    <div className="row">
        <div className="col"> 
            <div className="row">
                <div className="col">
                    <img className="image-container" src="https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png" alt="book"/>
                </div>
                <div className="col"> 
                    <h6>{props.title}</h6>  
                    <p>{props.author}</p>
                </div>
            </div>
        
        </div>
        <div className="col"> {props.date} </div>
        <div className="col"> <ProfileCard profileName={props.profileName} profileImage={props.profileImage} /> </div>
    </div>
    <div className="row">
        <div className="col"> <button>Approve</button><button>Denie</button> </div>
    </div>
</div>
</div>

const bookInfoReturnBook = 
<div>
<div className="container text-center card-container">
    <div className="row">
        <div className="col"> 
            <div className="row">
                <div className="col">
                    <img className="image-container" src="https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png" alt="book"/>
                </div>
                <div className="col"> 
                    <h6>{props.title}</h6>  
                    <p>{props.author}</p>
                </div>
            </div>
        
        </div>
        <div className="col"> {props.date} </div>
        <div className="col"> <ProfileCard user={props.profileName} profileImage={props.profileImage} /> </div>
    </div>
    <div className="row">
        {props.owner && <div className="col"> <button>Return Book</button> </div>}
    </div>
</div>
</div>

    

    if(props.tab === "requests")
        return bookInfoApproveDeny; 
    if(props.tab === "booksBorrowed")
        return bookInfoReturnBook;
    else
        return bookInfo; 
    


}


       
export default BookInfoCard;
import BookInfoCard from "../BookInfoCard/bookInfoCard";
import "./bookInfoCardList.css"
import React from "react";

function BookInfoCardList(props){
    const myRequestsHeading = 
    <div className="container text-center">
        <div className="row">
            <div className="col"> Title </div>
            <div className="col"> Date Of Request </div>
            <div className="col"> Owner </div>
        </div>
    </div>
    const requestsHeading = 
    <div className="container text-center">
        <div className="row">
            <div className="col"> Title </div>
            <div className="col"> Date Of Request </div>
            <div className="col"> User </div>
        </div>
    </div>
    const myAccountHeading1 = 
    <div className="container text-center">
        <div className="row">
            <div className="col"> Title </div>
            <div className="col"> Date </div>
            <div className="col"> Owner </div>
        </div>
    </div>
    const myAccountHeading2 = 
    <div className="container text-center">
        <div className="row">
            <div className="col"> Title </div>
            <div className="col"> Date </div>
            <div className="col"> Donator </div>
        </div>
    </div>
    const myAccountHeading3 = 
     <div className="container text-center">
         <div className="row">
             <div className="col"> Title </div>
             <div className="col"> Due Date </div>
             <div className="col"> Owner </div>
         </div>
     </div>

    let heading;

    if(props.tab === "myRequests")
        heading = myRequestsHeading;
    else if(props.tab === "requests")
        heading = requestsHeading;
    else if(props.tab ==="booksDonated" || props.tab ==="booksSaved")
        heading = myAccountHeading1;
    else if(props.tab === "booksOwned")
        heading = myAccountHeading2;
    else if(props.tab === "booksBorrowed" || props.tab ==="booksLent")
        heading = myAccountHeading3;
    else
        heading = "";


    return (
        <ul className="listContainer">
            {heading}
            {props.bookList.map((book) => {
                return (
                    <BookInfoCard
                        key={book.id}  
                        title={book.title}
                        author={book.author}
                        bookImage={book.bookImage}
                        date={book.date}
                        profileImage={book.profileImage}
                        profileName={book.profileName}
                        tab={props.tab}
                    />
                )
            })}
        </ul>
    )
}

export default BookInfoCardList;
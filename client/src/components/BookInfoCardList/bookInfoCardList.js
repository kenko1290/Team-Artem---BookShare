import BookInfoCard from "../BookInfoCard/bookInfoCard";
import "./bookInfoCardList.css"
import React from "react";

function BookInfoCardList(props){
<<<<<<< HEAD
    return (
        <ul className="listContainer">
            {props.bookList.map((book) => {
                return (
                    <BookInfoCard
                        key={book.id}  
                        title={book.bookTitle}
                        author={book.bookAuthor}
                        bookImage={book.bookImage}
                        profileName={book.owner? book.owner.firstName : book.requester.firstName}
                        tab={props.tab}
                    />
                )
            })}
        </ul>
    )
=======
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

    if(props.tab === "myRequests"){
        heading = myRequestsHeading;
        return (
            <ul className="listContainer">
                {heading}
                {props.myRequests.map((book) => {
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
    else if(props.tab === "requests"){
        heading = requestsHeading;
        return (
            <ul className="listContainer">
                {heading}
                {props.otherPeopleRequests.map((book) => {
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
    else if(props.tab ==="booksDonated" || props.tab ==="booksSaved")
        heading = myAccountHeading1;
    else if(props.tab === "booksOwned")
        heading = myAccountHeading2;
    else if(props.tab === "booksBorrowed" || props.tab ==="booksLent")
        heading = myAccountHeading3;
<<<<<<< HEAD
        return (
            <ul className="listContainer">
                {heading}
                {props.bookLentList.map((book) => {
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
>>>>>>> main
=======
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

>>>>>>> a041570d83d52b0862f8ce0f63d77fdd8dc91a24
}

export default BookInfoCardList;
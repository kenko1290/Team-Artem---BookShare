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

    if(props.currentTab === "myRequests"){
        heading = myRequestsHeading;
        return (
            <ul className="listContainer">
                {heading}
                {props.myRequestsList.map((book) => {
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
    else if(props.currentTab === "requests"){
        heading = requestsHeading;
        return (
            <ul className="listContainer">
                {heading}
                {props.otherPeopleRequestsList.map((book) => {
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
    else if(props.currentTab ==="booksDonated" || props.tab ==="booksSaved")
        heading = myAccountHeading1;
    else if(props.currentTab === "booksOwned"){
        heading = myAccountHeading2;
        return (
            <ul className="listContainer">
                {heading}
                {props.bookOwnedList.map((book) => {
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
    else if(props.currentTab === "booksBorrowed"){
        heading = myAccountHeading3;
        return (
            <ul className="listContainer">
                {heading}
                {props.bookBorrowedList.map((book) => {
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
    
    else if(props.currentTab === "booksLent"){
        heading = myAccountHeading3;
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
}

export default BookInfoCardList;
import BookInfoCard from "../BookInfoCard/bookInfoCard";
import "./bookInfoCardList.css"
import React from "react";


function BookInfoCardList(props){
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
}

export default BookInfoCardList;
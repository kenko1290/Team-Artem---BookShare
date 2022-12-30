import BookInfoCard from "../BookInfoCard/bookInfoCard";
import "./bookInfoCardList.css"
import React from "react";


function AccountBookInfoCardList(props){
    console.log(props.bookList)
    return (
        <ul className="listContainer">
            {props.bookList.map((book) => {
                return (
                    <BookInfoCard
                        key={book.textbook.id}  
                        title={book.textbook.bookTitle}
                        author={book.textbook.bookAuthor}
                        bookImage={book.textbook.bookImage}
                        profileName={book.lender? book.lender.firstName : book.borrower.firstName}
                        tab={props.tab}
                        owner={book.lender? true: false}
                    />
                )
            })}
        </ul>
    )
}

export default AccountBookInfoCardList;
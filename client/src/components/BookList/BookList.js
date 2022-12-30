import BookResult from "../BookResult/BookResult";
import classes from "./BookList.module.css";

function BookList({props}) {
  return (
    <div>
      <h4>Search Results</h4>
      <ul className={classes.list}>
        {props.map((book) => {
          return (
            <BookResult
              key={book.id}
              id = {book.id}
              title={book.bookTitle}
              author={book.bookAuthor}
              edition={book.bookEdition}
              format={book.bookFormat? "Physical" : "E-book"}
              sharing={book.typeOfSharing? "Lent" : "Donated"}
              location={book.pickUpLocation}
              date={book.pickUpDate}
              time={book.pickUpTime}
              image={book.bookImage? book.bookImage : "https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png"}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default BookList;

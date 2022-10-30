import BookResult from "./BookResult";
import classes from "./BookList.module.css";

function BookList(props) {
  return (
    <ul className={classes.list}>
      {props.bookList.map((book) => {
        return (
          <BookResult
            key={book.id}
            title={book.title}
            author={book.author}
            edition={book.edition}
            format={book.format}
            sharing={book.sharing}
            availability={book.availability}
            location={book.location}
            date={book.date}
            time={book.time}
            image={book.image}
          />
        );
      })}
    </ul>
  );
}

export default BookList;

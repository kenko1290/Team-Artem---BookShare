import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import BookList from './components/BookList';
import PostBookForm from './components/PostBookForm';

function App() {
  const books = [
    {
      id: "1",
      title: "Computer Organization and Design, MIPS Edition",
      author: "David A. Patterson & John L. Hennessy",
      edition: "6th",
      format: "e-book",
      sharing: "donated",
      availability: "Available",
      location: "Discord",
      date: "10/30/2022",
      time: "12:00pm",
      image: "https://m.media-amazon.com/images/P/0128201096.01._SCLZZZZZZZ_SX500_.jpg",
    },

    {
      id: "2",
      title: "Data Structures and Algorithm Analysis in C++",
      author: "Mark Allen Weiss",
      edition: "4th",
      format: "Physical",
      sharing: "Lent",
      availability: "Available",
      location: "North Building Rm 510",
      date: "11/13/2022",
      time: "10:00am",
      image: "https://m.media-amazon.com/images/P/0273769383.01._SCLZZZZZZZ_SX500_.jpg",
    },

    {
      id: "3",
      title: "Operating System Concepts",
      author: "Abraham Silberschatz, Peter Baer Galvin, Greg Gagne",
      edition: "9th",
      format: "E-book",
      sharing: "Donated",
      availability: "Available",
      location: "Email",
      date: "10/23/2022",
      time: "2:00pm",
      image: "https://m.media-amazon.com/images/I/51Qy2upM+aL._SY344_BO1,204,203,200_.jpg",
    },
  ];
  return (
    <div>
      <PostBookForm/>
      <BookList bookList={books}/>
      <Navbar />
    </div>
  );
}

export default App;

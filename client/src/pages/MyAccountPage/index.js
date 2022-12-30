import React, { useState, useEffect } from "react";
import BookInfoCardList from "../../components/BookInfoCardList/bookInfoCardList";
import AccountBookInfoCardList from "../../components/BookInfoCardList/accountBookInfoCardList";
import BookNavbar from "../../components/Navbar";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorAlert from "../../components/ErrorAlert";

let currentTab = "booksBorrowed";
export default function MyAccountPage() {
	const [books, setBooks] = useState([]);
	const [accountBooks, setAccountBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [accountDisplay, setAccountDisplay] = useState(0);

	const changeDisplay = (event) => {
		// if value is owned, set accountDisplay to 0, if value is borrowed, set accountDisplay to 1,
		// if value is requested, set accountDisplay to 2
		event.preventDefault();
		if (event.target.value === "owned") {
			setAccountDisplay(0);
		} else if (event.target.value === "borrowed") {
			setAccountDisplay(1);
		} else {
			setAccountDisplay(2);
		}
	};

	useEffect(() => {
		async function getData() {
			setLoading(true);
			switch (accountDisplay) {
				default:
					try {
						let response = await fetch("/api/textbooks/my_textbooks");
						let allBooks = await response.json();
						setBooks(allBooks);
						setLoading(false);
					} catch (error) {
						console.error("Error fetching all owned textbooks", error);
						setError(true);
					}
					break;
				case 0:
					try {
						let response = await fetch("/api/textbooks/my_textbooks");
						let allBooks = await response.json();
						setBooks(allBooks);
						setLoading(false);
					} catch (error) {
						console.error("Error fetching all owned textbooks", error);
						setError(true);
					}
					break;

				case 1:
					try {
						let response = await fetch("/api/request_textbooks/my_borrows");
						let allBooks = await response.json();
						setAccountBooks(allBooks);
						setLoading(false);
					} catch (error) {
						console.error("Error fetching all borrowed textbooks", error);
						setError(true);
					}
					break;

				case 2:
					try {
						let response = await fetch("/api/request_textbooks/borrows_my");
						let allBooks = await response.json();
						setAccountBooks(allBooks);
						setLoading(false);
					} catch (error) {
						console.error("Error fetching all lent textbooks", error);
						setError(true);
					}
					break;
			}
		}

		getData();

		return () => {
			// clean up function
		};
	}, [accountDisplay]);

	if (error)
		return <ErrorAlert details="Failed to fetch textbooks" />;
	if (loading) return <LoadingSpinner />;

	const requestsPage = (
		<div>
			<BookNavbar />
			<div className="sideBarContainer">
				<h5>My Account</h5>
				<button className="d-block" value="owned" onClick={changeDisplay}>
					{" "}
					Books Owned
				</button>
				<button className="d-block" value="borrowed" onClick={changeDisplay}>
					{" "}
					Books Borrowed
				</button>

				<button className="d-block" value="lent" onClick={changeDisplay}>
					{" "}
					Books Lent
				</button>
			</div>
			<div style={{ marginTop: "-200px" }}>
				{accountDisplay===0? <BookInfoCardList bookList={books} tab={currentTab} /> : <AccountBookInfoCardList bookList={accountBooks} tab={currentTab} />}
				{books.length === 0 && accountDisplay===0 && (
					<p style={{ position: "absolute", right: "60%" }}>No Posted Books</p>
				)}
				{accountBooks.length === 0 && accountDisplay===1 && (
					<p style={{ position: "absolute", right: "60%" }}>No Borrowed Books</p>
				)}
				{accountBooks.length === 0 && accountDisplay===2 && (
					<p style={{ position: "absolute", right: "60%" }}>No Lent Books</p>
				)}
			</div>
		</div>
	);

	return requestsPage;
}

import BookList from "../../components/BookList/BookList";
import BookNavbar from "../../components/Navbar";
import SideBar from "../../components/SideBar/sideBar";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorAlert from "../../components/ErrorAlert";

export default function HomePage1() {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function getData() {
			setLoading(true);
			try {
				let response = await fetch("/api/textbooks");
				let allBooks = await response.json();
				setBooks(allBooks);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching all textbooks", error);
				setError(true);
			}
		}

		getData();

		return () => {
			// clean up function
		};
	}, []);

	if (error) return <ErrorAlert details="Failed to fetch all textbooks" />;
	if (loading) return <LoadingSpinner />;

	return (
		<>
			<BookNavbar />
			<div class="container-fluid">
				<div class="row mb-4">
					<div class="col-2 fw-bold">
						<SideBar nav="home" />
					</div>
					<div
						class="col border border-dark border-bottom-0 border-top-0 border-bottom-right-0"
						style={{ paddingLeft: "50px", paddingTop: "20px" }}
					>
						{<BookList props={books} />}
					</div>
				</div>
			</div>
		</>
	);
}

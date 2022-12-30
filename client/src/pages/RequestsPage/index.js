import React,{useState, useEffect} from "react";
import BookInfoCardList from "../../components/BookInfoCardList/requestBookInfoCardList";
import BookNavbar from "../../components/Navbar";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorAlert from "../../components/ErrorAlert";
let currentTab = "myRequests";

export default function RequestsPage() {
	const [books, setBooks] = useState([]);
	const [request, setRequest] = useState(true)
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		async function getData() {
			setLoading(true);
			if(request){
				try {
					let response = await fetch("/api/request_textbooks/my_requests");
					let allBooks = await response.json();
					setBooks(allBooks);
					setLoading(false);
				} catch (error) {
					console.error("Error fetching all requested textbooks", error);
					setError(true);
				}
			}
			else{
				try {
					let response = await fetch("/api/request_textbooks/requests_my");
					let allBooks = await response.json();
					setBooks(allBooks);
					setLoading(false);
					
				} catch (error) {
					console.error("Error fetching all requests to you", error);
					setError(true);
				}
			}
		}

		getData();

		return () => {
			// clean up function
		};
	}, [request]);

	const changeRequest = (event) => {
		event.preventDefault();
		// change the value of request to true if value is myRequest and false if value is requestMy
		if(event.target.value === "myRequest"){
			setRequest(true);
		}
		else{
			setRequest(false);
		}
		
	}

	if (error) return <ErrorAlert details="Failed to fetch all requested textbooks" />;
	if (loading) return <LoadingSpinner />;
	
	const requestsPage = (
		<div>
			<BookNavbar />
			<div className="sideBarContainer" style={{margin:"20px"}}>
			<h5>Requests</h5>
			<button className="d-block" value="myRequest" onClick={changeRequest}>
				{" "}
				My Requests For Books
			</button>
			<button className="d-block" value="requestMy" onClick={changeRequest}>
				{" "}
				Requests For My Books{" "}
			</button>
		</div>
			<div style={{ marginTop: "-150px" }}>
			{books.length === 0 && <p style={{position:"absolute", right:"60%"}}>No Requested Books</p>}
			<BookInfoCardList requests={books} tab={currentTab}/>
			</div>
		</div>
	);

	return requestsPage;
}

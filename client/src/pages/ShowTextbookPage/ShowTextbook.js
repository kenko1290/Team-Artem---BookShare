import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorAlert from "../../components/ErrorAlert";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ShowTextbook() {
	const [textbook, setTextbook] = useState(null);
	const [loading, setLoading] = useState(true);
	const [textbookError, setTextbookError] = useState(false);
	const [requestError, setRequestError] = useState(false);
	const [success, setSuccess] = useState(false);
	let params = useParams();

	useEffect(() => {
		async function getData() {
			setLoading(true);
			try {
				let response = await fetch("/api/textbooks/" + params.id);
				let textbookData = await response.json();
				setTextbook(textbookData);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching /api/textbooks/" + params.id, error);
				setTextbookError(true);
			}
		}

		getData();

		return () => {
			// clean up function
		};
	}, [params.id]);

	if (textbookError)
		return (
			<ErrorAlert details={"Textbook with id=" + params.id + " not found"} />
		);
	if (loading) return <LoadingSpinner />;

	const requestBook = async (event) => {
		event.preventDefault();
		try {
			let response = await fetch("/api/request_textbooks/" + params.id, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				setSuccess(true);
			} else {
				setRequestError(true);
			}
		} catch (error) {
			console.error("Server error while requesting a textbook", error);
			setRequestError(true);
		}
	};
	
	if (success) return <Navigate to="/request" />;

	return(
        <div class="container overflow-hidden">
		{requestError && <ErrorAlert details={"Failed to request textbook"} />}
			<div class="text-center fw-bold" style={{ fontSize: "20px" }}>
				Book Information:
			</div>
			<br></br>
			<form onSubmit={requestBook}>
			<div class="row">
					<div class="col-2"><strong>Type Of Sharing:</strong></div>
					{textbook.typeOfSharing? <p>Lent</p> : <p>Donated</p>}
				</div>
				<br></br>
				<div class="row mb-4">
					<div class="col-2 fw-bold">Book Image:</div>
					{textbook.bookImage ? <p>Can't display Image</p> : <p>No Image</p>}
					<div class="col-8"></div>
				</div>
				<div class="row mb-4">
					<div class="col-2 fw-bold">Book Title:</div>
					{textbook.bookTitle ? <p>{textbook.bookTitle}</p> : <p>No Title Specified</p>}
					<div class="col-6"></div>
				</div>
				<div class="row mb-4">
					<div class="col-2 fw-bold">Book Author:</div>
					{textbook.bookAuthor ? <p>{textbook.bookAuthor}</p> : <p>No Author Provided</p>}
					<div class="col-6"></div>
				</div>
				<div class="row">
					<div class="col fw-bold">Book Summary:</div>
				</div>
				<div class="row mb-4">
					{textbook.bookSummary ? <p>{textbook.bookSummary}</p> : <p>No Summary Provided</p>}
					<div class="col-3"></div>
				</div>
				<div class="row">
					<div class="col-2"><strong>ISBN:</strong></div>
					{textbook.bookISBN ? <p>{textbook.bookISBN}</p> : <p>No ISBN Provided</p>}
					<div class="col-6"></div>
				</div>
				<div class="row">
					<div class="col"><strong>Edition:</strong></div>
					{textbook.bookEdition ? <p>{textbook.bookEdition}</p> : <p>No Edition Provided</p>}
					<div class="col-6"></div>
				</div>
				<div class="row">
					<div class="col-2"><strong>Format:</strong></div>
					{textbook.bookFormat ? <p>Physical</p> : <p>Digital</p>}
					<div class="col-6"></div>
				</div>
				<div class="row mb-4">
					<div class="col-2"><strong>Class/Subject:</strong></div>
					{textbook.subject ? <p>{textbook.subject}</p> : <p>No Subject Provided</p>}
					<div class="col-6"></div>
				</div>
				<div class="row">
					<div class="col fw-bold">Owner's Sharing Preferences</div>
				</div>
				<div class="row">
					<div class="col fw-bold">Picking Up Book:</div>
					<div class="col fw-bold">Returning Book</div>
				</div>
				<div class="row">
					<div class="col-1">Date:</div>
					<p class="col-3 bg-light">{textbook.pickUpDate? textbook.pickUpDate : "No Date Provided"}</p>
					<div class="col-2"></div>
					<div class="col-1">Date:</div>
					<p class="col-3 bg-light">{textbook.returnDate? textbook.returnDate: "No Date Provided"}</p>
				</div>
				<div class="row">
					<div class="col-1">Location:</div>
					<p class="col-3 bg-light">{textbook.pickUpLocation? textbook.pickUpLocation: "No Location Provided"}</p>
					<div class="col-2"></div>
					<div class="col-1">Location:</div>
					<p class="col-3 bg-light">{textbook.returnLocation? textbook.returnLocation: "No Location Provided"}</p>
				</div>
				<div class="row mb-4">
					<div class="col-1">Time:</div>
					<p class="col-3 bg-light">{textbook.pickUpTime ? textbook.pickUpTime: "No Time Provided"}</p>
					<div class="col-2"></div>
					<div class="col-1">Time:</div>
					<p class="col-3 bg-light">{textbook.returnTime ? textbook.returnTime: "No Time Provided"}</p>
				</div>
				<div class="row">
					<div class="col-4"></div>
					<button class="col-2" type="submit">
						Request Book
					</button>
					<div class="col"></div>
				</div>
				<div style={{position:"absolute", right:"10%", top:"50%"}}>
					<strong>Owner Information</strong>
					<p><strong>Name:</strong> {textbook.owner.firstName + " " + textbook.owner.lastName}</p>
					<p><strong>Contact:</strong> {textbook.owner.email?  textbook.owner.email: "User had set their contact to private" }</p>
					<p><strong>College:</strong> {textbook.owner.college ? textbook.owner.college: "User didn't provide their college"}</p>
					<p><strong>Year:</strong> {textbook.owner.year ? textbook.owner.year: "User didn't provide their grade year"}</p>
					<p><strong>Major:</strong> {textbook.owner.major ? textbook.owner.major: "User didn't provide their major"}</p>
					<p><strong>About:</strong> {textbook.owner.aboutMe ? textbook.owner.aboutMe: "User didn't provide their about section"}</p>

				</div>
			</form>
		</div>
    )
}

export default ShowTextbook;

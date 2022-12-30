import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function PostBookForm() {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [format, setFormat] = useState("physical");
	const [typeOfSharing, setTypeOfSharing] = useState("lend");
	const changeFormat = (e) => {
		setFormat(e.target.value);
	};
	const cover = format === "physical" ? true : false;

	const changeSharing = e => {
		setTypeOfSharing(e.target.value);
	};

	const sharing = typeOfSharing === "lend" ? true : false;

	const postBook = async (e) => {
		e.preventDefault();
		const formData = new FormData();

		const bookTitle = e.target.bookTitle.value;
		const bookSummary = e.target.bookSummary.value;
		const bookFormat = cover;
		const bookAuthor = e.target.bookAuthor.value;
		const bookISBN = e.target.bookISBN.value;
		const bookEdition = e.target.bookEdition.value;
		const subject = e.target.subject.value;
		const pickUpDate = e.target.pickUpDate.value;
		const pickUpLocation = e.target.pickUpLocation.value;
		const pickUpTime = e.target.pickUpTime.value;
		const returnDate = e.target.returnDate.value;
		const returnTime = e.target.returnTime.value;
		const returnLocation = e.target.returnLocation.value;
		const typeOfSharing = sharing;

		formData.append("bookTitle", bookTitle);
		formData.append("bookSummary", bookSummary);
		formData.append("bookFormat", bookFormat);
		formData.append("bookAuthor", bookAuthor);
		formData.append("bookISBN", bookISBN);
		formData.append("bookEdition", bookEdition);
		formData.append("subject", subject);
		formData.append("pickUpDate", pickUpDate);
		formData.append("pickUpLocation", pickUpLocation);
		formData.append("pickUpTime", pickUpTime);
		formData.append("returnDate", returnDate);
		formData.append("returnTime", returnTime);
		formData.append("returnLocation", returnLocation);
		formData.append("typeOfSharing", typeOfSharing);

		const data = {};
		formData.forEach((value, key) => {
			data[key] = value;
		});
		try {
			let response = await fetch("/api/textbooks", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setSuccess(true);
			} else {
				setError(true);
			}
		} catch (err) {
			console.error("Server error while creating a new user", error);
			console.log("\n data: \n", formData);
			setError(true);
		}
	};

	if (success) return <Navigate to="/home" />;

	return (
		<div class="container overflow-hidden">
			<div class="text-center fw-bold" style={{ fontSize: "20px" }}>
				Enter Book Information Below:
				<br>
				</br>
				<strong>Note: Please limit your input size, sometimes the server could not save large input</strong>
			</div>
			<br></br>
			<form onSubmit={postBook}>
			<div class="row">
					<div class="col-2">Type Of Sharing:</div>
					<input
						type="radio"
						class="col-2 bg-light"
						name="sharing"
						value="lend"
						onChange={changeSharing}
						checked={typeOfSharing === "lend"}
					/>
					Lend Book
					<input
						type="radio"
						class="col-2 bg-light"
						name="sharing"
						value="donate"
						onChange={changeSharing}
						checked={typeOfSharing === "donate"}
					/>
					Donate Book
					<div class="col-6"></div>
				</div>
				<br></br>
				<div class="row mb-4">
					<div class="col-2 fw-bold">Book Image:</div>
					<input class="col-2" type="file" name="bookImage" />
					<div class="col-8"></div>
				</div>
				<div class="row mb-4">
					<div class="col-2 fw-bold">Book Title:</div>
					<input class="col-4 bg-light" name="bookTitle" />
					<div class="col-6"></div>
				</div>
				<div class="row mb-4">
					<div class="col-2 fw-bold">Book Author:</div>
					<input class="col-4 bg-light" name="bookAuthor" />
					<div class="col-6"></div>
				</div>
				<div class="row">
					<div class="col fw-bold">Book Summary:</div>
				</div>
				<div class="row mb-4">
					<input name="bookSummary" class="col" />
					<div class="col-3"></div>
				</div>
				<div class="row">
					<div class="col fw-bold">Extra Details</div>
				</div>
				<div class="row">
					<div class="col-2">ISBN</div>
					<input class="col-4 bg-light" name="bookISBN" />
					<div class="col-6"></div>
				</div>
				<div class="row">
					<div class="col">Edition:</div>
					<input class="col-4 bg-light" name="bookEdition" />
					<div class="col-6"></div>
				</div>
				<div class="row">
					<div class="col-2">Format:</div>
					<input
						type="radio"
						class="col-2 bg-light"
						name="format"
						value="physical"
						onChange={changeFormat}
						checked={format === "physical"}
					/>
					Physical
					<input
						type="radio"
						class="col-2 bg-light"
						name="format"
						value="digital"
						onChange={changeFormat}
						checked={format === "digital"}
					/>
					Digital
					<div class="col-6"></div>
				</div>
				<div class="row mb-4">
					<div class="col-2">Class/Subject:</div>
					<input class="col-4 bg-light" name="subject" />
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
					<input class="col-3 bg-light" name="pickUpDate" />
					<div class="col-2"></div>
					<div class="col-1">Date:</div>
					<input class="col-3 bg-light" name="returnDate" />
				</div>
				<div class="row">
					<div class="col-1">Location:</div>
					<input class="col-3 bg-light" name="pickUpLocation" />
					<div class="col-2"></div>
					<div class="col-1">Location:</div>
					<input class="col-3 bg-light" name="returnLocation" />
				</div>
				<div class="row mb-4">
					<div class="col-1">Time:</div>
					<input class="col-3 bg-light" name="pickUpTime" />
					<div class="col-2"></div>
					<div class="col-1">Time:</div>
					<input class="col-3 bg-light" name="returnTime" />
				</div>
				<div class="row">
					<div class="col-4"></div>
					<button class="col-2" type="submit">
						Post Book
					</button>
					<div class="col"></div>
				</div>
			</form>
		</div>
	);
}

export default PostBookForm;

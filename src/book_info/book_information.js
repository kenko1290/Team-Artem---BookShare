import React from "react";
import data from "./book_data";

function BookInfo({
	title,
	author,
	summary,
	isbn,
	edition,
	format,
	subject,
	lend_book,
	lend_date,
	lend_location,
	lend_time,
	return_book,
	return_date,
	return_location,
	return_time,
}) {
	return (
		<div>
			<h2>
				<strong>{title}</strong>
			</h2>
			<h6>
				<strong>{author}</strong>
			</h6>
			<h4>
				<strong>Book Summary:</strong>
			</h4>
			<p>{summary}</p>
			<br></br>

			{/* details of the book */}
			<p>
				<strong>Extra Details</strong>
				<br></br>
				<b>ISBN:</b> {isbn}
				<br></br>
				<b>Edition:</b> {edition}
				<br></br>
				<b>Format:</b> {format}
				<br></br>
				<b>Class/Subject:</b> {subject}
				<br></br>
			</p>
			<br></br>
			{/* owner's preferences */}
			<p>
				<strong>Owner's sharing preferences</strong>
				<br></br>
				<b>Owner is:</b> {lend_book} the book
				<br></br>
				<b>Data:</b> {lend_date}
				<br></br>
				<b>Location:</b> {lend_location}
				<br></br>
				<b>Time:</b> {lend_time}
				<br></br>
				<br></br>
				{/* returning book preferences */}
				{return_book && (
					<div>
						<strong>Returning Book</strong>
						<br></br>
						<b>Date:</b> {return_date}
						<br></br>
						<b>Location:</b> {return_location}
						<br></br>
						<b>Time:</b> {return_time}
					</div>
				)}
			</p>
			<br></br>
			<p>
				Note: If the book's owner's preferences don't work for you, you can
				indicate this in your request and provide your own preferences.
			</p>
		</div>
	);
}

function ShowBookInfo(){
	return (
		<BookInfo 
				title={data.title}
				author={data.author}
				summary={data.summary}
				isbn={data.isbn}
				edition={data.edition}
				format={data.format}
				subject={data.subject}
				lend_book={data.lend_book}
				lend_location={data.lend_location}
				lend_date={data.lend_date}
				lend_time={data.lend_time}
				return_book={data.return_book}
				return_date={data.return_date}
				return_location={data.return_location}
				return_time={data.return_time} />
	)
}

export default ShowBookInfo;
import BookInfoCard from "../BookInfoCard/bookInfoCard";
import "./bookInfoCardList.css";
import React from "react";
import { useState } from "react";
import ErrorAlert from "../ErrorAlert";
import { Navigate } from "react-router-dom";

function RequestBookInfoCardList({ requests }) {
    const [success, setSuccess] = useState(false);
    const [approveError, setApproveError] = useState(false);
	function approveRequest(requestId) {
		return async () => {
			try {
				let response = await fetch("/api/request_textbooks/approve/" + requestId, {
					method: "PUT",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (response.ok) {
					setSuccess(true);
				} else {
					setApproveError(true);
				}
			} catch (error) {
				console.error("Server error while approving", error);
				setApproveError(true);
			}
		};
	}

    if (success) return <Navigate to="/my-account" />;

	return (
		<ul className="listContainer">
            {approveError && <ErrorAlert details={"Error approving request"} />}
			{requests.map((request) => (
				<>
					<BookInfoCard
						key={request.id}
						id={request.textbook.id}
						title={request.textbook.bookTitle}
						profileName={
							request.owner
								? request.owner.firstName
								: request.requester.firstName
						}
						author={request.textbook.bookAuthor}
						edition={request.textbook.bookEdition}
						format={request.textbook.bookFormat ? "Physical" : "E-book"}
						sharing={request.textbook.typeOfSharing ? "Lent" : "Donated"}
					></BookInfoCard>
					{request.requester && <button key={request.id} onClick={approveRequest(request.id)}>Approve</button>}
				</>
			))}
		</ul>
	);
}

export default RequestBookInfoCardList;

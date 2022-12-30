import React from "react";
import "./sideBar.css";
import ProfileCard from "../UserProfileCard/profileCard";

function SideBar(props) {
	const homePageSideBar = (
		<div className="sideBarContainer">
			<h5>Filter By Sharing Type </h5>
			<br>
			</br>
			<h6>(Filter Currently Doesn't Work)</h6>
			<button className="d-block">Lent Books</button>
			<button className="d-block">Donated Books</button>

			<br></br>
			<br></br>
			<button>Clear Filter</button>
		</div>
	);

	function handleLendBookTabClick() {
		props.changeTab("lendBook");
	}
	function handleDonateBookTabClick() {
		props.changeTab("donateBook");
	}
	const postPageSideBar = (
		<div className="sideBarContainer">
			<h5>Type Of Sharing</h5>
			<button className="d-block" onClick={handleLendBookTabClick}>
				Lend Book
			</button>
			<button className="d-block" onClick={handleDonateBookTabClick}>
				Donate Book
			</button>
		</div>
	);

	function handleMyRequestsTabClick() {
		props.changeTab("myRequests");
	}
	function handleRequestsTabClick() {
		props.changeTab("requests");
	}

	const requestsPageSideBar = (
		<div className="sideBarContainer">
			<h5>Requests</h5>
			<button className="d-block" onClick={handleMyRequestsTabClick}>
				{" "}
				My Requests For Books
			</button>
			<button className="d-block" onClick={handleRequestsTabClick}>
				{" "}
				Requests For My Books{" "}
			</button>
		</div>
	);

	function handleBooksBorrowedTabClick() {
		props.changeTab("booksBorrowed");
	}
	function handleBooksOwnedTabClick() {
		props.changeTab("booksOwned");
	}
	function handleBooksLentTabClick() {
		props.changeTab("booksLent");
	}
	const myAccountPageSideBar = (
		<div className="sideBarContainer">
			<h5>My Account</h5>
			<button className="d-block" onClick={handleBooksOwnedTabClick}>
				{" "}
				Books Owned
			</button>
			<button className="d-block" onClick={handleBooksBorrowedTabClick}>
				{" "}
				Books Borrowed
			</button>

			<button className="d-block" onClick={handleBooksLentTabClick}>
				{" "}
				Books Lent
			</button>
		</div>
	);

	const bookPageSideBar = (
		<div className="sideBarContainer">
			<div className="imageContainer">
				<img
					src="https://m.media-amazon.com/images/I/51InjRPaF7L._AC_SY780_.jpg"
					alt="book"
				/>
			</div>
			<a href="/request">
				<button className="d-block">Request Book</button>
			</a>

			<button className="d-block">Save Book</button>

			<h5>Owner</h5>
			<ProfileCard user={props.name} />

			<button className="d-block">Message Owner</button>
		</div>
	);

	const settingsPageSideBar = (
		<div className="sideBarContainer">
			<h5>Settings</h5>
			<button className="d-block">
				<a
                    target="_blank"
					style={{ color: "black", textDecoration: "none" }}
					href="https://github.com/kenko1290/Team-Artem---BookShare/blob/main/client/README.md" rel="noreferrer"
				>
					General
				</a>
			</button>
		</div>
	);
	const progfilePageSideBar = (
		<div className="sideBarContainer">
			<ProfileCard user={props.name}/>
			<button className="d-block">
				<a
					href="/edit-profile"
					style={{ color: "black", textDecoration: "none" }}
				>
					Edit Profile
				</a>
			</button>
			<p>Note: it might take a while for changes of profile to be updated, please refresh the page if you don't see the changes you made</p>
		</div>
	);

	const profileEditsPageSideBar = (
		<div className="sideBarContainer">
			<ProfileCard user={props.name} />
			<button>Change Image</button>
		</div>
	);

	if (props.nav === "home") return homePageSideBar;
	if (props.nav === "post") return postPageSideBar;
	if (props.nav === "requests") return requestsPageSideBar;
	if (props.nav === "myAccount") return myAccountPageSideBar;
	if (props.nav === "bookPage") return bookPageSideBar;
	if (props.nav === "settings") return settingsPageSideBar;
	if (props.nav === "profile") return progfilePageSideBar;
	if (props.nav === "profileEdit") return profileEditsPageSideBar;
}

export default SideBar;

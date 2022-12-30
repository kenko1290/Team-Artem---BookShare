const express = require("express");
const passport = require("../middlewares/authentication");
const router = express.Router();
const db = require("../models");
const { User, Textbook, RequestTextbook } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/request_textbooks/my_requests, get all requests that I made
//    GET    /api/request_textbooks/requests_my, get all requests that I received
//    GET    /api/request_textbooks/my_borrows, get all textbooks that I borrowed
//    GET    /api/request_textbooks/borrows_my, get all textbooks that I lent
//    POST   /api/request_textbooks/:id , creating a request to the textbook ID
//    PUT    /api/request_textbooks/approve/:id , update the request post *lent* to true for that request id
//    PUT   /api/request_textbooks/disapprove/:id , update the request post *approve* to false for that request id

// The full URL's for these routes are composed by combining the
// prefixes used to load the controller files.
//    /api comes from the file ../app.js
//    /request_textbooks comes from the file ./requestTextbooks.js

// all get requests return 2 object, one is the textbook contains
// every datatype in ./Textbook.js
// 	{
// 			id
// 			typeOfSharing
// 			bookImage
// 			bookTitle
// 			bookAuthor
// 			bookSummary
// 			bookEdition
// 			bookISBN
// 			bookOwnerID
// 			bookFormat
// 			subject
// 			pickUpDate
// 			pickUpLocation
// 			pickUpTime
// 			returnDate
// 			returnTime
// 			returnLocation
//          bookStatus
//	}
// the other is the request post contains {id, requesterID, textbookID, lent, approve}

// requesting the textbook
router.post("/:id", passport.isAuthenticated(), (req, res) => {
	const { id } = req.params;
	Textbook.findByPk(id).then((mtextbook) => {
		if (!mtextbook) {
			return res.sendStatus(404);
		}
		RequestTextbook.create({
			requesterID: req.user.id,
			textbookID: id,
			ownerID: mtextbook.ownerID,
		})
			.then((newRequestTextbook) => {
				res.status(201).json(newRequestTextbook);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});
});

router.get("/my_requests", passport.isAuthenticated(), (req, res) => {
	RequestTextbook.findAll({
		where: { requesterID: req.user.id, lent: false, approved: true },
		include: [
			{
				model: User,
				as: "owner",
				foreignKey: "ownerID",
				attributes: ["id", "firstName", "lastName"],
			},
			{
				model: Textbook,
				as: "textbook",
				foreignKey: "textbookID",
				attributes: ["id", "bookTitle", "bookAuthor"],
			},
		],
	})
		.then((allTextbooks) => {
			res.json(allTextbooks);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.get("/requests_my", passport.isAuthenticated(), (req, res) => {
	RequestTextbook.findAll({
		where: { ownerID: req.user.id, lent: false, approved: true},
		include: [
			{
				model: User,
				as: "requester",
				foreignKey: "requesterID",
				attributes: ["id", "firstName", "lastName"],
			},
			{
				model: Textbook,
				as: "textbook",
				foreignKey: "textbookID",
				attributes: ["id", "bookTitle", "bookAuthor"],
			},
		],
	})
		.then((allTextbooks) => {
			res.json(allTextbooks);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.get("/my_borrows", passport.isAuthenticated(), (req, res) => {
	RequestTextbook.findAll({
		where: { requesterID: req.user.id, lent: true, approved: true },
		include: [
			{
				model: User,
				as: "lender",
				foreignKey: "ownerID",
				attributes: ["id", "firstName", "lastName"],
			},
			{
				model: Textbook,
				as: "textbook",
				foreignKey: "textbookID",
				attributes: ["id", "bookTitle", "bookAuthor"],
			},
		],
	})
		.then((allTextbooks) => {
			res.json(allTextbooks);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.get("/borrows_my", passport.isAuthenticated(), (req, res) => {
	RequestTextbook.findAll({
		where: { ownerID: req.user.id, lent: true, approved: true },
		include: [
			{
				model: User,
				as: "borrower",
				foreignKey: "requesterID",
				attributes: ["id", "firstName", "lastName"],
			},
			{
				model: Textbook,
				as: "textbook",
				foreignKey: "textbookID",
				attributes: ["id", "bookTitle", "bookAuthor"],
			},
		],
	})
		.then((allTextbooks) => {
			res.json(allTextbooks);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put("/approve/:id", passport.isAuthenticated(), (req, res) => {
	const { id } = req.params;
	RequestTextbook.findByPk(id).then((mtextbook) => {
		if (!mtextbook) {
			return res.sendStatus(404);
		}
		mtextbook.update({ lent: true });

		res.json({ message: "Successfully Approve the Request" });
	});
});

router.put("/disapprove/:id", passport.isAuthenticated(), (req, res) => {
	const { id } = req.params;
	RequestTextbook.findByPk(id).then((mtextbook) => {
		if (!mtextbook) {
			return res.sendStatus(404);
		}
		mtextbook.update({ approved: false });
		res.json({ message: "Successfully Disapprove the request" });
	});
});

module.exports = router;

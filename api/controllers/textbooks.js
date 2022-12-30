const express = require("express");
// require sequelize
const { Sequelize } = require("sequelize");
const passport = require("../middlewares/authentication");
const router = express.Router();
// require User
const db = require("../models");
const { User, Textbook } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/textbooks , get all textbooks
//    GET    /api/textbooks/my_textbooks , get all textbooks by the current user
//    POST   /api/textbooks , creating a new textbook witk bookTitle and typeOfSharing
//    GET    /api/textbooks/:id , get a specific textbook by it id
//    PUT    /api/textbooks/:id , update a specific textbook by it id
//    DELETE /api/textbooks/:id , delete a specific textbook by it id
//
// The full URL's for these routes are composed by combining the
// prefixes used to load the controller files.
//    /api comes from the file ../app.js
//    /textbooks comes from the file ./Textbooks.js

router.get("/", (req, res) => {
	Textbook.findAll({
		attributes: [
			"id",
			"bookTitle",
			"bookAuthor",
			"bookEdition",
			"bookImage",
			"bookFormat",
			"pickUpLocation",
			"pickUpTime",
			"typeOfSharing",
		],
	})
		.then((textbooks) => {
			res.status(200).json(textbooks);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get("/my_textbooks", passport.isAuthenticated(), (req, res) => {
	Textbook.findAll({
		where: {
			ownerID: req.user.id,
		},
		include: [
			{
				model: User,
				as: "owner",
				attributes: ["firstName"],
			},
		],
		attributes: ["id", "bookTitle", "bookAuthor", "bookImage"],
	})
		.then((textbooks) => {
			res.status(200).json(textbooks);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.post("/", express.json(), passport.isAuthenticated(), (req, res) => {
	if (req.body.bookImage) {
		const buffer = Buffer.from(req.body.bookImage, "base64");
	}
	const {
		bookTitle,
		typeOfSharing,
		bookAuthor,
		bookSummary,
		bookEdition,
		bookISBN,
		bookFormat,
		subject,
		pickUpDate,
		pickUpLocation,
		pickUpTime,
		returnDate,
		returnTime,
		returnLocation,
	} = req.body;

	Textbook.create({
		bookImage: req.body.bookImage ? buffer : null,
		bookTitle,
		typeOfSharing,
		bookAuthor,
		bookSummary,
		bookEdition,
		bookISBN,
		bookFormat,
		subject,
		pickUpDate,
		pickUpLocation,
		pickUpTime,
		returnDate,
		returnTime,
		returnLocation,
		ownerID: req.user.id,
	})
		.then((newTextbook) => {
			res.status(201).json(newTextbook);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

// This route is a bit more complex. It uses the `findByPk` method
// to find a single record by its primary key. If the record is not
// found, it returns a 404 status code. If the record is found, it
// returns the record as JSON.
// to pass in the record id, we use the `:id` syntax in the route path.
router.get("/:id", (req, res) => {
	const { id } = req.params;
	Textbook.findByPk(id, {
		include: [
			{
				model: User,
				as: "owner",
				attributes: [
					"id",
					"firstName",
					"lastName",
					"email",
					"aboutMe",
					"college",
					"major",
					"year",
				],
			},
		],
	}).then((mtextbook) => {
		if (!mtextbook) {
			return res.sendStatus(404);
		}

		res.json(mtextbook);
	});
});

router.put("/:id", passport.isAuthenticated(), (req, res) => {
	if (req.body.bookImage) {
		const buffer = Buffer.from(req.body.bookImage, "base64");
	}
	const { id } = req.params;
	Textbook.findByPk(id).then((mtextbook) => {
		if (!mtextbook) {
			return res.sendStatus(404);
		}

		mtextbook.bookTitle = req.body.bookTitle
			? req.body.bookTitle
			: mtextbook.bookTitle;
		mtextbook.typeOfSharing = req.body.typeOfSharing
			? req.body.typeOfSharing
			: mtextbook.typeOfSharing;
		mtextbook.bookImage = req.body.bookImage ? buffer : mtextbook.bookImage;
		mtextbook.bookAuthor = req.body.bookAuthor
			? req.body.bookAuthor
			: mtextbook.bookAuthor;
		mtextbook.bookEdition = req.body.bookEdition
			? req.body.bookEdition
			: mtextbook.bookEdition;
		mtextbook.bookISBN = req.body.bookISBN
			? req.body.bookISBN
			: mtextbook.bookISBN;
		mtextbook.bookFormat = req.body.bookFormat
			? req.body.bookFormat
			: mtextbook.bookFormat;
		mtextbook.subject = req.body.subject ? req.body.subject : mtextbook.subject;
		mtextbook.bookSummary = req.body.bookSummary
			? req.body.bookSummary
			: mtextbook.bookSummary;
		mtextbook.pickUpDate = req.body.pickUpDate
			? req.body.pickUpDate
			: mtextbook.pickUpDate;
		mtextbook.pickUpTime = req.body.pickUpTime
			? req.body.pickUpTime
			: mtextbook.pickUpTime;
		mtextbook.pickUpLocation = req.body.pickUpLocation
			? req.body.pickUpLocation
			: mtextbook.pickUpLocation;
		mtextbook.returnDate = req.body.returnDate
			? req.body.returnDate
			: mtextbook.returnDate;
		mtextbook.returnTime = req.body.returnTime
			? req.body.returnTime
			: mtextbook.returnTime;
		mtextbook.returnLocation = req.body.returnLocation
			? req.body.returnLocation
			: mtextbook.returnLocation;

		mtextbook
			.save()
			.then((updatedTextbook) => {
				res.json(updatedTextbook);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});
});

router.delete("/:id", passport.isAuthenticated(), (req, res) => {
	const { id } = req.params;
	Textbook.findByPk(id).then((mtextbook) => {
		if (!mtextbook) {
			return res.sendStatus(404);
		}

		mtextbook
			.destroy()
			.then(() => {
				res.sendStatus(204);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});
});

module.exports = router;

const express = require("express");
const passport = require("../middlewares/authentication");
const router = express.Router();
const db = require("../models");
const { Textbook } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/textbooks , get all textbooks
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
	Textbook.findAll({}).then((allTextbooks) => res.json(allTextbooks));
});

router.post("/", passport.isAuthenticated(), (req, res) => {
    // pass in all datatype in ./Textbook.js as req.body
    
    const { bookTitle, typeOfSharing, bookAuthor, bookSummary, bookEdition, bookISBN, bookFormat, subject, pickUpDate, pickUpLocation, pickUpTime, returnDate, returnTime, returnLocation } = req.body;

	Textbook.create({ bookTitle, typeOfSharing, bookAuthor, bookSummary, 
        bookEdition, bookISBN, bookFormat, subject, pickUpDate, pickUpLocation, pickUpTime, 
        returnDate, returnTime, returnLocation, 
        ownerID: req.user.id }).then((newTextbook) => {
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
	Textbook.findByPk(id).then((mtextbook) => {
		if (!mtextbook) {
			return res.sendStatus(404);
		}

		res.json(mtextbook);
	});
});

router.put("/:id", passport.isAuthenticated(), (req, res) => {
	const { id } = req.params;
	Textbook.findByPk(id).then((mtextbook) => {
		if (!mtextbook) {
			return res.sendStatus(404);
		}

		mtextbook.bookTitle = req.body.bookTitle;
		mtextbook.typeOfSharing = req.body.typeOfSharing;
		mtextbook.bookImage = req.body.bookImage;
		mtextbook.bookAuthor = req.body.bookAuthor;
		mtextbook.bookEdition = req.body.bookEdition;
		mtextbook.bookISBN = req.body.bookISBN;
		mtextbook.bookFormat = req.body.bookFormat;
		mtextbook.subject = req.body.subject;
		mtextbook.bookSummary = req.body.bookSummary;
		mtextbook.pickUpDate = req.body.pickUpDate;
		mtextbook.pickUpTime = req.body.pickUpTime;
		mtextbook.pickUpLocation = req.body.pickUpLocation;
		mtextbook.returnDate = req.body.returnDate;
		mtextbook.returnTime = req.body.returnTime;
		mtextbook.returnLocation = req.body.returnLocation;

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

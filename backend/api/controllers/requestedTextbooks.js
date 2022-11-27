const express = require("express");
const router = express.Router();
const db = require("../models");
const { RequestedTextbook } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/posted_textbooks , only return the book id and owner
//    GET    /api/posted_textbooks/:id
//    POST   /api/posted_textbooks
//    PUT   /api/posted_textbooks/approve, set the lended flag to true
//    PUT    /api/posted_textbooks/:id
//    DELETE /api/posted_textbooks/:id
//
// The full URL's for these routes are composed by combining the
// prefixes used to load the controller files.
//    /api comes from the file ../app.js
//    /requested_textbooks comes from the file ./requestedTextbooks.js

router.get("/", (req, res) => {
	RequestedTextbook.findAll({}).then((allTextbooks) => res.json(allTextbooks));
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	RequestedTextbook.findByPk(id).then((ptextbook) => {
		if (!ptextbook) {
			return res.sendStatus(404);
		}
		res.json(ptextbook);
	});
});

router.post("/", (req, res) => {
	let { bookRequester, bookOwner, bookId } = req.body;

	RequestedTextbook.create({ bookRequester, bookOwner, bookId })
		.then((newTextbook) => {
			res.status(201).json(newTextbook);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put("/approve", (req, res) => {
	let { bookRequester, bookOwner, bookId } = req.body;

	RequestedTextbook.update(
		{ lended: true },
		{
			where: {
				bookRequester: bookRequester,
				bookOwner: bookOwner,
				bookId: bookId,
			},
		}
	)
		.then((newTextbook) => {
			res.status(201).json(newTextbook);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put("/:id", (req, res) => {
	const { id } = req.params;
	RequestedTextbook.findByPk(id).then((ptextbook) => {
		if (!ptextbook) {
			return res.sendStatus(404);
		}
		ptextbook.update(req.body).then((updatedTextbook) => {
			res.json(updatedTextbook);
		});
	});
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;
	RequestedTextbook.findByPk(id).then((ptextbook) => {
		if (!ptextbook) {
			return res.sendStatus(404);
		}
		ptextbook.destroy().then(() => {
			res.sendStatus(204);
		});
	});
});

module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../models");
const { PostedTextbook } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/posted_textbooks
//    POST   /api/posted_textbooks
//    GET    /api/posted_textbooks/:id
//    GET    /api/posted_textbooks/:subject
//    GET    /api/posted_textbooks/:avaliable  , find all textbook that has avaliable = true
//    PUT    /api/posted_textbooks/:id
//    DELETE /api/posted_textbooks/:id
//
// The full URL's for these routes are composed by combining the
// prefixes used to load the controller files.
//    /api comes from the file ../app.js
//    /posted_textbooks comes from the file ./postedTextbooks.js

router.get("/", (req, res) => {
    PostedTextbook.findAll({}).then((allTextbooks) => res.json(allTextbooks));
    }
);  

router.post("/", (req, res) => {
    let { typeOfSharing, bookImage, bookTitle, 
        bookAuthor, bookSummary, bookEdition, bookISBN, 
        bookOwner, bookFormat, subject, 
        pickUpDate, pickUpLocation, pickUpTime, 
        returnDate, returnTime, returnLocation, bookStatus } = req.body;
    
    PostedTextbook.create({ typeOfSharing, bookImage, bookTitle,
        bookAuthor, bookSummary, bookEdition, bookISBN,
        bookOwner, bookFormat, subject,
        pickUpDate, pickUpLocation, pickUpTime,
        returnDate, returnTime, returnLocation, bookStatus })
        .then((newTextbook) => {
            res.status(201).json(newTextbook);
        }
    ).catch((err) => {
        res.status(400).json(err);
    }
    );
}
);

router.get("/:id", (req, res) => {
    const { id } = req.params;
    PostedTextbook.findByPk(id).then((ptextbook) => {
        if (!ptextbook) {
            return res.sendStatus(404);
        }
        res.json(ptextbook);
    });
}
);

router.get("/:subject", (req, res) => {
    const { subject } = req.params;
    PostedTextbook.findByPk(subject).then((ptextbook) => {
        if (!ptextbook) {
            return res.sendStatus(404);
        }
        res.json(ptextbook);
    });
}
);

router.get("/:avaliable", (req, res) => {
    const { avaliable } = req.params;
    PostedTextbook.findByPk(avaliable).then((ptextbook) => {
        if (!ptextbook) {
            return res.sendStatus(404);
        }
        res.json(ptextbook);
    });
}
);



router.put("/:id", (req, res) => {
    const { id } = req.params;
    PostedTextbook.findByPk(id).then((ptextbook) => {
        if (!ptextbook) {
            return res.sendStatus(404);
        }

        ptextbook.typeOfSharing = req.body.typeOfSharing;
        ptextbook.bookImage = req.body.bookImage;
        ptextbook.bookTitle = req.body.bookTitle;
        ptextbook.bookAuthor = req.body.bookAuthor;
        ptextbook.bookSummary = req.body.bookSummary;
        ptextbook.bookEdition = req.body.bookEdition;
        ptextbook.bookISBN = req.body.bookISBN;
        ptextbook.bookOwner = req.body.bookOwner;
        ptextbook.bookFormat = req.body.bookFormat;
        ptextbook.subject = req.body.subject;
        ptextbook.pickUpDate = req.body.pickUpDate;
        ptextbook.pickUpLocation = req.body.pickUpLocation;
        ptextbook.pickUpTime = req.body.pickUpTime;
        ptextbook.returnDate = req.body.returnDate;
        ptextbook.returnTime = req.body.returnTime;
        ptextbook.returnLocation = req.body.returnLocation;
        ptextbook.bookStatus = req.body.bookStatus;

        ptextbook.save().then((updatedTextbook) => {
            res.json(updatedTextbook);
        }).catch((err) => {
            res.status(400).json(err);
        });
    });
}
);

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    PostedTextbook.findByPk(id).then((ptextbook) => {
        if (!ptextbook) {
            return res.sendStatus(404);
        }
        ptextbook.destroy().then(() => {
            res.sendStatus(204);
        });
    });
}
);

module.exports = router;




    


const express = require('express');
const router = express.Router();
const { Textbook } = require('../database/models');

// helper function so we don't need to wrap our
// handler functions in try-catch blocks;
// the async handler will catch any errors and pass
// them to the error-handling middleware (defined in app.js)
const ash = require('express-async-handler');

/** GET ALL TEXTBOOKS: express-async-handler (ash) */
// automatically catches any error and sends to middleware
// same as using try/catch and calling next(error)
router.get('/', ash(async(req, res) => {
  //{include: [Instructor]}
  let textbooks = await Textbook.findAll();
  res.status(200).json(textbooks);
}));


/** GET TEXTBOOK BY ID */
router.get('/:id', ash(async(req, res) => {
  let textbook = await Textbook.findByPk(req.params.id);
  res.status(200).json(textbook);
}));

/** ADD NEW TEXTBOOK */
router.post('/', function(req, res, next) {
  Textbook.create(req.body)
    .then(createdTextbook => res.status(200).json(createdTextbook))
    .catch(err => next(err));
});

/** DELETE TEXTBOOK */
router.delete('/:id', function(req, res, next) {
  Textbook.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a textbook!"))
    .catch(err => next(err));
});

/******************* EDIT *********************/

router.put('/:id', ash(async(req, res) => {
  await Textbook.update(req.body,
        { where: {id: req.params.id} }
  );
  let textbook = await Textbook.findByPk(req.params.id);
  res.status(201).json(textbook);
}));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
const express = require('express');
const router = express.Router();

// Subrouters;
const textbooksRouter = require('./textbooks');

// Mount our subrouters to assemble our apiRouter;
router.use('/textbooks', textbooksRouter);

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
const Sequelize = require('sequelize');
const db = require('../db');

const Textbook = db.define("textbook", {

  typeOfSharing: {
    type: Sequelize.BOOLEAN,
  },

  textbookID: {
    type: Sequelize.INTEGER
  },

  bookImage: {
    type: Sequelize.STRING
  },

  bookTitle: {
    type: Sequelize.STRING,
  },

  bookAuthor: {
    type: Sequelize.STRING,
  },

  bookSummary: {
    type: Sequelize.STRING
  },

  bookISBN: {
    type: Sequelize.INTEGER,
  },

  bookEdition: {
    type: Sequelize.INTEGER,
  },

  bookFormat: {
    type: Sequelize.STRING
  },

  bookOwnerID: {
    type: Sequelize.INTEGER
  },

  bookSubject: {
    type: Sequelize.STRING
  },

  pickUpDate: {
    type: Sequelize.DATEONLY
  },

  pickUpTime: {
    type: Sequelize.TIME
  },

  pickUpLocation: {
    type: Sequelize.STRING
  },

  returnDate: {
    type: Sequelize.DATEONLY
  },

  returnTime: {
    type: Sequelize.TIME
  },

  returnLocation: {
    type: Sequelize.STRING
  },
});

module.exports = Textbook;
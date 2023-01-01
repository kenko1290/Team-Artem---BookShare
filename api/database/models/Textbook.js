const Sequelize = require('sequelize');
const db = require('../db');

const Textbook = db.define("textbook", {

  typeOfSharing: {
    type: Sequelize.BOOLEAN,
  },

  textbookID: {
    type: Sequelize.INTEGER
  },

  image: {
    type: Sequelize.STRING
  },

  title: {
    type: Sequelize.STRING,
  },

  author: {
    type: Sequelize.STRING,
  },

  Summary: {
    type: Sequelize.STRING
  },

  ISBN: {
    type: Sequelize.INTEGER,
  },

  edition: {
    type: Sequelize.INTEGER,
  },

  format: {
    type: Sequelize.STRING
  },

  ownerID: {
    type: Sequelize.INTEGER
  },

  subject: {
    type: Sequelize.STRING
  },

  date1: {
    type: Sequelize.DATEONLY
  },

  time1: {
    type: Sequelize.TIME
  },

  location1: {
    type: Sequelize.STRING
  },

  date2: {
    type: Sequelize.DATEONLY
  },

  time2: {
    type: Sequelize.TIME
  },

  location2: {
    type: Sequelize.STRING
  },
});

module.exports = Textbook;
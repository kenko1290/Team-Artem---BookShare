// model for posted textbooks, has the type of sharing(true for lending, false for donating)
// book image, book title, book author, book summary, book edition,
// book isbn,  book owner, book format(true for hardcover otherwise papercover),
// subject, pick up date, pick up location, pick up time, return date
// return time, return location, book status(true for available, false for unavailable)

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class PostedTextbook extends Model {
		static associate(models) {
			// define association here
		}
	}
	PostedTextbook.init(
		{
			typeOfSharing: { type: DataTypes.BOOLEAN }, // lending = true or donating = false
			bookImage: { type: DataTypes.STRING },
			bookTitle: { type: DataTypes.STRING },
			bookAuthor: { type: DataTypes.STRING },
			bookSummary: { type: DataTypes.STRING },
			bookEdition: { type: DataTypes.STRING },
			bookISBN: { type: DataTypes.STRING },
			bookOwner: { type: DataTypes.STRING },
			bookFormat: { type: DataTypes.BOOLEAN }, // hardcover = true, papercover = false
			subject: { type: DataTypes.STRING },
			pickUpDate: { type: DataTypes.STRING },
			pickUpLocation: { type: DataTypes.STRING },
			pickUpTime: { type: DataTypes.STRING },
			returnDate: { type: DataTypes.STRING },
			returnTime: { type: DataTypes.STRING },
			returnLocation: { type: DataTypes.STRING },
			bookStatus: { type: DataTypes.BOOLEAN }, // avaliable or not avaliable
		},
		{
			sequelize,
			modelName: "PostedTextbook",
		}
	);
	return PostedTextbook;
};

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Textbook extends Model {}

	Textbook.init(
		{
			typeOfSharing: { type: DataTypes.BOOLEAN, allowNull: false }, // lending = true or donating = false
			bookImage: { type: DataTypes.BLOB, allowNull: true },
			bookTitle: { type: DataTypes.STRING, allowNull: false },
			bookAuthor: { type: DataTypes.STRING, allowNull: true },
			bookSummary: { type: DataTypes.STRING, allowNull: true },
			bookEdition: { type: DataTypes.STRING, allowNull: true },
			bookISBN: { type: DataTypes.STRING, allowNull: true },
			ownerID: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			bookFormat: { type: DataTypes.BOOLEAN }, // hardcover = true, digital = false
			subject: { type: DataTypes.STRING, allowNull: true },
			pickUpDate: { type: DataTypes.STRING, allowNull: true },
			pickUpLocation: { type: DataTypes.STRING, allowNull: true },
			pickUpTime: { type: DataTypes.STRING, allowNull: true },
			returnDate: { type: DataTypes.STRING, allowNull: true },
			returnTime: { type: DataTypes.STRING, allowNull: true },
			returnLocation: { type: DataTypes.STRING, allowNull: true },
			//bookStatus, boolean (avaliable or not avaliable), default true
			bookStatus: { type: DataTypes.BOOLEAN, defaultValue: true },
		},
		{
			sequelize,
			modelName: "Textbook",
		}
	);

	Textbook.associate = (models) => {
		// associations can be defined here
		// user belongs to Textbook through Textbook's ownerID
		Textbook.belongsTo(models.User, {
			foreignKey: "ownerID",
			as: "owner",
		  });
	};

	return Textbook;
};

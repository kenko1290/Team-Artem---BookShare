"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class RequestTextbook extends Model {}
	RequestTextbook.init(
		{
			requesterID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			textbookID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			ownerID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},

			lent: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			approved: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
		},
		{
			sequelize,
			modelName: "RequestTextbook",
		}
	);

	RequestTextbook.associate = function (models) {
		// associations can be defined here
		RequestTextbook.belongsTo(models.User, {
			foreignKey: "requesterID",
			as: "requester",
		});
		RequestTextbook.belongsTo(models.User, {
			foreignKey: "requesterID",
			as: "borrower",
		});
		RequestTextbook.belongsTo(models.User, {
			foreignKey: "ownerID",
			as: "owner",
		});
		RequestTextbook.belongsTo(models.User, {
			foreignKey: "ownerID",
			as: "lender",
		});
		RequestTextbook.belongsTo(models.Textbook, {
			foreignKey: "textbookID",
			as: "textbook",
		});
	};

	return RequestTextbook;
};

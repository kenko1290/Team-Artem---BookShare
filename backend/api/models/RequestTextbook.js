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
	};

	return RequestTextbook;
};

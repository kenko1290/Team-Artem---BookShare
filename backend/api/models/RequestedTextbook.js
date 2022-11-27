"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class RequestedTextbook extends Model {
		static associate(models) {
			// define association here
		}
	}
	RequestedTextbook.init(
		{
			bookRequester: { type: DataTypes.STRING },
			bookOwner: { type: DataTypes.STRING },
			bookId: { type: DataTypes.STRING },
			lended: { type: DataTypes.BOOLEAN, defaultValue: false },
		},
		{
			sequelize,
			modelName: "RequestedTextbook",
		}
	);
	return RequestedTextbook;
};

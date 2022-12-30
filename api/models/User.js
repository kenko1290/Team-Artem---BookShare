const { Model, col } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		getFullname() {
			return [this.firstName, this.lastName].join(" ");
		}
	}

	User.init(
		{
			firstName: { type: DataTypes.STRING },
			lastName: { type: DataTypes.STRING },
			email: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
				validate: {
					isEmail: true,
				},
			},
			passwordHash: { type: DataTypes.STRING },
			password: {
				type: DataTypes.VIRTUAL,
				validate: {
					isLongEnough: (val) => {
						if (val.length < 7) {
							throw new Error("Please choose a longer password");
						}
					},
				},
			},

			college: { type: DataTypes.STRING, allowNull: true },
			major: { type: DataTypes.STRING, allowNull: true },
			year: { type: DataTypes.STRING, allowNull: true },
			aboutMe: { type: DataTypes.STRING, allowNull: true },
			phoneNumber: { type: DataTypes.STRING, allowNull: true },
		},
		{
			sequelize,
			modelName: "User",
		}
	);

	User.associate = (models) => {
		// associations can be defined here
	};

	User.beforeSave((user, options) => {
		if (user.password) {
			user.passwordHash = bcrypt.hashSync(user.password, 10);
		}
	});

	return User;
};

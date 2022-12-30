const router = require("express").Router();
const { User } = require("../models");
const passport = require("../middlewares/authentication");

//  POST   /auth/signup, creates a new User
//  POST   /auth/login, logs in a User
//  GET    /auth/login, checks if a User is logged in
//  POST   /auth/logout, logs out a User
//  PUT    /auth/update/profile, updates the User's information
// 	POST   /auth/update/password, updates the User's password
// 	POST   /auth/update/email, updates the User's email
// 	POST   /auth/update/phone, updates the User's phone number

router.post("/signup", (req, res) => {
	console.log("POST body: ", req.body);
	User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
		college: req.body.college,
		major: req.body.major,
		year: req.body.year,
	})
		.then((user) => {
			user.password = undefined;
			req.login(user, () => res.status(201).json({ message: "Successfully Sign Up" }));
		})
		.catch((err) => {
			res.status(400).json({ msg: "Failed Signup", err });
		});
});

router.post("/login", passport.authenticate("local"), (req, res) => {
	// If this function gets called, authentication was successful.
	// `req.user` contains the authenticated user.
	res.json({ message: "Successfully Login" });
});

router.get("/login", (req, res) => {
	if (req.user) {
		res.json(req.user);
	} else {
		res.sendStatus(401);
	}
});

router.post("/logout", (req, res, next) => {
	// Logout is now async and has to finish before we can return a response
	//  passport version >= 0.6.0
	//  https://medium.com/passportjs/fixing-session-fixation-b2b68619c51d
	req.logout((err) => {
		if (err) return next(err);
		res.status(200).json({ message: "Logout successful" });
	});
});

//   PUT   /auth/update, updates the User's college, major, year, aboutMe, phoneNumber
router.put("/update/profile", passport.isAuthenticated(), (req, res) => {
	const { id } = req.user;
	User.findByPk(id).then((user) => {
		if (!user) {
			return res.sendStatus(404);
		}
		user.update({
			firstName: req.body.firstName ? req.body.firstName : req.user.firstName,
			lastName: req.body.lastName ? req.body.lastName : req.user.lastName,
			college: req.body.college ? req.body.college : req.user.college,
			major: req.body.major ? req.body.major : req.user.major,
			year: req.body.year ? req.body.year : req.user.year,
			aboutMe: req.body.aboutMe ? req.body.aboutMe : req.user.aboutMe,
		});
		res.status(200).json({ message: "Successfully Change Profile" });
	});
});

//   PUT   /auth/update/password, updates the User's password but password is a virtual field, that hash into passwordHash
router.put("/update/password", passport.isAuthenticated(), (req, res) => {
	const { id } = req.user;
	User.findByPk(id).then((user) => {
		if (!user) {
			return res.sendStatus(404);
		}
		user.update({
			password: req.body.password ? req.body.password : req.user.password,
		});

		res.status(200).json({ message: "Successfully Change Password" });
	});
});

//   PUT   /auth/update/email, updates the User's email
router.put("/update/email", passport.isAuthenticated(), (req, res) => {
	const { id } = req.user;
	User.findByPk(id).then((user) => {
		if (!user) {
			return res.sendStatus(404);
		}
		user.update({
			email: req.body.email ? req.body.email : req.user.email,
		});
		res.status(200).json({ message: "Successfully Change Email" });
	});
});

//   PUT   /auth/update/phone, updates the User's phone number
router.put("/update/phone", passport.isAuthenticated(), (req, res) => {
	const { id } = req.user;
	User.findByPk(id).then((user) => {
		if (!user) {
			return res.sendStatus(404);
		}
		user.update({
			phoneNumber: req.body.phoneNumber
				? req.body.phoneNumber
				: req.user.phoneNumber,
		});
		res.status(200).json({ message: "Successfully Change Phone Number" });
	});
});

module.exports = router;

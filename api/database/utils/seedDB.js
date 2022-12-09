const { Textbook } = require('../models');

const seedDB = async () => {
	const dummyTextbook = await Textbook.create({
		typeOfSharing: true,
		textbookID: 0,
        image: "https://img.freepik.com/free-vector/open-blue-book-white_1308-69339.jpg?w=2000",
        title: "Sample Title",
		author: "Sample Author",
		Summary: "Sample Summary",
		ISBN: 0000000000000,
		edition: 0,
		format: "Hardcover",
		ownerID: 0,
		subject: "Sample Subject",
		date1: '2023-01-01',
		time1: '12:00:00',
		location1: "Sample Pickup Location",
		date2: '2023-06-01',
		time2: '12:00:00',
		location2: "Sample Return location"
	})
}

module.exports = seedDB;
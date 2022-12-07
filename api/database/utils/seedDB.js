const { Textbook } = require('../models');

const seedDB = async () => {
	const dummyTextbook = await Textbook.create({
		typeOfSharing: true,
		textbookID: 0,
        bookImage: "https://img.freepik.com/free-vector/open-blue-book-white_1308-69339.jpg?w=2000",
        bookTitle: "Sample Title",
		bookAuthor: "Sample Author",
		bookSummary: "Sample Summary",
		bookISBN: 0000000000000,
		bookEdition: 0,
		bookFormat: "Hardcover",
		bookOwnerID: 0,
		subject: "Sample Subject",
		pickUpDate: '2023-01-01',
		pickUpTime: '12:00:00',
		pickUpLocation: "Sample Pickup Location",
		returnDate: '2023-06-01',
		returnTime: '12:00:00',
		returnLocation: "Sample Return location"
	})
}

module.exports = seedDB;
export async function getAllTextbooks() {

    const response = await fetch('/api/textbooks');
    return await response.json();
}

export async function createTextbook(data) {
    const response = await fetch(`/api/textbooks`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({typeOfSharing: true,
            textbookID: 0,
            bookImage: data["bookImage"],
            bookTitle: data["bookTitle"],
            bookAuthor: data["bookAuthor"],
            bookSummary: data["bookSummary"],
            bookISBN: data["bookISBN"],
            bookEdition: data["bookEdition"],
            bookFormat: data["bookFormat"],
            bookOwnerID: 0,
            bookSubject: data["bookSubject"],
            pickUpDate: data["pickUpDate"],
            pickUpTime: data["pickUpTime"],
            pickUpLocation: data["pickUpLocation"],
            returnDate: data["returnDate"],
            returnTime: data["returnTime"],
            returnLocation: data["returnLocation"]})
      })
    return await response.json();
}
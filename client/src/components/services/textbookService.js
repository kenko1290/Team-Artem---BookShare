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
            bookImage: data["image"],
            title: data["title"],
            bookAuthor: data["author"],
            bookSummary: data["Summary"],
            bookISBN: data["ISBN"],
            bookEdition: data["edition"],
            bookFormat: data["format"],
            bookOwnerID: 0,
            bookSubject: data["subject"],
            pickUpDate: data["date1"],
            pickUpTime: data["time1"],
            pickUpLocation: data["location1"],
            returnDate: data["date2"],
            returnTime: data["time2"],
            returnLocation: data["location2"]})
      })
    return await response.json();
}
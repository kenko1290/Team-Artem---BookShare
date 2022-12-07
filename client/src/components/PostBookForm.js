//import { getAllTextbooks, createTextbook } from "./services/textbookService";
import { createTextbook } from "./services/textbookService";
import { useState } from 'react';

/*
function printAllTextbooks() {
  getAllTextbooks()
    .then(textbook => {
      console.log(textbook)
    });
}*/

function PostBookForm() {
  const [inputs, setInputs] = useState({}); // used for keeping track of all the inputs on the form

  const handleChange = (event) => { // updates inputs whenever something is entered into the form
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);
    createTextbook(inputs)  // pass form inputs to createTextbook function
    setInputs({}); // clear form of inputs after submitting
 }

  return (
    <form onSubmit={handleSubmit}>
      <div class="container overflow-hidden">
        <div class="text-center fw-bold">Enter Book Information Below:</div>
        <div class="row mb-4">
          <div class="col-2 fw-bold">Book Image:</div>
          <input class="col-3"
            type="file"
            name="bookImage"
            value={inputs.bookImage || ""}
            onChange={handleChange}/>
          <div class="col-8"></div>
        </div>
        <div class="row mb-4">
          <div class="col-2 fw-bold">Book Title:</div>
          <input class="col-4 bg-light"
            type="text" 
            name="bookTitle" 
            value={inputs.bookTitle || ""}
            onChange={handleChange}/>
          <div class="col-6"></div>
        </div>
        <div class="row mb-4">
          <div class="col-2 fw-bold">Author:</div>
          <input class="col-4 bg-light"
            type="text" 
            name="bookAuthor" 
            value={inputs.bookAuthor || ""}
            onChange={handleChange}/>
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col fw-bold">Book Summary:</div>
        </div>
        <div class="row mb-4">
          <textarea class="col"
            name="bookSummary"
            value={inputs.bookSummary || ""}
            onChange={handleChange}></textarea>
          <div class="col-3"></div>
        </div>
        <div class="row">
          <div class="col fw-bold">Extra Details</div>
        </div>
        <div class="row">
          <div class="col-2">ISBN</div>
          <input class="col-4 bg-light"
            name="bookISBN"
            value={inputs.bookISBN || ""}
            onChange={handleChange}/>
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col">Edition:</div>
          <input class="col-4 bg-light"
            name="bookEdition"
            value={inputs.bookEdition || ""}
            onChange={handleChange}/>
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col-2">Format:</div>
          <input class="col-2 bg-light"
            name="bookFormat"
            value={inputs.bookFormat || ""}
            onChange={handleChange}/>
          <div class="col-6"></div>
        </div>
        <div class="row mb-4">
          <div class="col-2">Class/Subject:</div>
          <input class="col-4 bg-light"
            name="bookSubject"
            value={inputs.bookSubject || ""}
            onChange={handleChange}/>
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col fw-bold">Owner's Sharing Preferences</div>
        </div>
        <div class="row">
          <div class="col fw-bold">Picking Up Book:</div>
          <div class="col fw-bold">Returning Book</div>
        </div>
        <div class="row">
          <div class="col-1">Date:</div>
          <input class="col-3 bg-light"
            name="pickUpDate"
            value={inputs.pickUpDate || ""}
            onChange={handleChange}/>
          <div class="col-2"></div>
          <div class="col-1">Date:</div>
          <input class="col-3 bg-light"
            name="returnDate"
            value={inputs.returnDate || ""}
            onChange={handleChange}/>
        </div>
        <div class="row">
          <div class="col-1">Location:</div>
          <input class="col-3 bg-light"
            name="pickUpLocation"
            value={inputs.pickUpLocation || ""}
            onChange={handleChange}/>
          <div class="col-2"></div>
          <div class="col-1">Location:</div>
          <input class="col-3 bg-light"
            name="returnLocation"
            value={inputs.returnLocation || ""}
            onChange={handleChange}/>
        </div>
        <div class="row mb-4">
          <div class="col-1">Time:</div>
          <input class="col-3 bg-light"
            name="pickUpTime"
            value={inputs.pickUpTime || ""}
            onChange={handleChange}/>
          <div class="col-2"></div>
          <div class="col-1">Time:</div>
          <input class="col-3 bg-light"
            name="returnTime"
            value={inputs.returnTime || ""}
            onChange={handleChange}/>
        </div>
        <div class="row">
          <div class="col-4"></div>
          <button class="col-2" type="submit">Post Book</button>
          <div class="col"></div>
        </div>
      </div>
    </form>
    
  );
}

export default PostBookForm;

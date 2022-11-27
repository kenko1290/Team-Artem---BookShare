function PostBookForm() {
  return (
    <div class="container overflow-hidden">
      <div class="text-center fw-bold">Enter Book Information Below:</div>
      <div class="row mb-4">
        <div class="col-2 fw-bold">Book Image:</div>
        <button class="col-2">Add Image</button>
        <div class="col-8"></div>
      </div>
      <div class="row mb-4">
        <div class="col-2 fw-bold">Book Title:</div>
        <input class="col-4 bg-light"/>
        <div class="col-6"></div>
      </div>
      <div class="row">
        <div class="col fw-bold">Book Summary:</div>
      </div>
      <div class="row mb-4">
        <textarea class="col"></textarea>
        <div class="col-3"></div>
      </div>
      <div class="row">
        <div class="col fw-bold">Extra Details</div>
      </div>
      <div class="row">
        <div class="col-2">ISBN</div>
        <input class="col-4 bg-light"/>
        <div class="col-6"></div>
      </div>
      <div class="row">
        <div class="col">Edition:</div>
        <input class="col-4 bg-light"/>
        <div class="col-6"></div>
      </div>
      <div class="row">
        <div class="col-2">Format:</div>
        <input type="checkbox" class="col-2 bg-light"/>Hardcover
        <input type="checkbox" class="col-2 bg-light"/>Papercover
        <div class="col-6"></div>
      </div>
      <div class="row mb-4">
        <div class="col-2">Class/Subject:</div>
        <input class="col-4 bg-light"/>
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
        <input class="col-3 bg-light"/>
        <div class="col-2"></div>
        <div class="col-1">Date:</div>
        <input class="col-3 bg-light"/>
      </div>
      <div class="row">
        <div class="col-1">Location:</div>
        <input class="col-3 bg-light"/>
        <div class="col-2"></div>
        <div class="col-1">Location:</div>
        <input class="col-3 bg-light"/>
      </div>
      <div class="row mb-4">
        <div class="col-1">Time:</div>
        <input class="col-3 bg-light"/>
        <div class="col-2"></div>
        <div class="col-1">Time:</div>
        <input class="col-3 bg-light"/>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <button class="col-2">Post Book</button>
        <div class="col"></div>
      </div>
    </div>
    
  );
}

export default PostBookForm;

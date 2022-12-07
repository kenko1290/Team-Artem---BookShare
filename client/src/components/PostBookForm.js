import axios from "axios";
import React, {useState, useEffect} from "react";

function PostBookForm(props) {
  const [title, setTitle] = useState("");
  const [Summary, setSummary] = useState("");
  const [ISBN, setISBN] = useState("");
  const [edition, setEdition] = useState("");
  const [format, setFormat] = useState("");
  const [subject, setSubject] = useState("");
  const [date1, setData1] = useState("");
  const [date2, setData2] = useState("");
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");

  function handlePostButtonClick(){
    let content = {};
    if(props.currentTab === "lendBook"){
      content = {
        title, Summary, ISBN, edition, format, subject, pickup: {date1, location1, time1}, return: {date2, location2, time2}, sharingType: "lending"
      }

    } else {
      content = {
        title, Summary, ISBN, edition, format, subject, pickup: {date1, location1, time1}, return: {date2, location2, time2}, sharingType: "donating"
      }

    }
    async function PostBook(){
      try{
        await axios.post("/api/", content);
      } catch (error) {
        console.error("Error posting");
      }
    }
    PostBook();
  };

  function setHardcover(){
    setFormat("Hardcover");
  }
  function setPapercover(){
    setFormat("Papercover");
  }
  

  return (
    <div class="container overflow-hidden">
      <div class="text-center fw-bold">Enter Book Information Below:</div>
      <form>
        <div class="row mb-4">
          <div class="col-2 fw-bold">Book Image:</div>
          <button class="col-2">Add Image</button>
          <div class="col-8"></div>
        </div>
        <div class="row mb-4">
          <div class="col-2 fw-bold">Book Title:</div>
          <input class="col-4 bg-light" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col fw-bold">Book Summary:</div>
        </div>
        <div class="row mb-4">
          <textarea class="col" value={Summary} onChange={(e) => setSummary(e.target.value)}></textarea>
          <div class="col-3"></div>
        </div>
        <div class="row">
          <div class="col fw-bold">Extra Details</div>
        </div>
        <div class="row">
          <div class="col-2">ISBN</div>
          <input class="col-4 bg-light" type="text" value={ISBN} onChange={(e) => setISBN(e.target.value)} />
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col">Edition:</div>
          <input class="col-4 bg-light" type="text" value={edition} onChange={(e) => setEdition(e.target.value)}/>
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col-2">Format:</div>
          <input type="checkbox" class="col-2 bg-light" onClick={setHardcover}/>Hardcover
          <input type="checkbox" class="col-2 bg-light" onClick={setPapercover}/>Papercover
          <div class="col-6"></div>
        </div>
        <div class="row mb-4">
          <div class="col-2">Class/Subject:</div>
          <input class="col-4 bg-light" type="text" value={subject} onChange={(e) => setSubject(e.target.value)}/>
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
          <input class="col-3 bg-light" type="text" value={date1} onChange={(e) => setData1(e.target.value)}/>
          <div class="col-2"></div>
          <div class="col-1">Date:</div>
          <input class="col-3 bg-light" type="text" value={date2} onChange={(e) => setData2(e.target.value)}/>
        </div>
        <div class="row">
          <div class="col-1">Location:</div>
          <input class="col-3 bg-light" type="text" value={location1} onChange={(e) => setLocation1(e.target.value)}/>
          <div class="col-2"></div>
          <div class="col-1">Location:</div>
          <input class="col-3 bg-light" type="text" value={location2} onChange={(e) => setLocation2(e.target.value)}/>
        </div>
        <div class="row mb-4">
          <div class="col-1">Time:</div>
          <input class="col-3 bg-light" type="text" value={time1} onChange={(e) => setTime1(e.target.value)}/>
          <div class="col-2"></div>
          <div class="col-1">Time:</div>
          <input class="col-3 bg-light" type="text" value={time2} onChange={(e) => setTime2(e.target.value)}/>
        </div>
      </form>
      <div class="row">
        <div class="col-4"></div>
        <button class="col-2" onClick={handlePostButtonClick}>Post Book</button>
        <div class="col"></div>
      </div>
    </div>
    
  );
}

export default PostBookForm;

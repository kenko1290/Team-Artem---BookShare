import classes from "./BookResult.module.css";

function BookResult(props) {
  return (
    <div class="container">
      <div class="row" style={{paddingBottom:"15px"}}>
        <div class="col-2">
          <img src={props.image} alt={props.name} className={classes.image}/>
        </div>
        <div class="col">
          <div className={classes.title}>
            {props.title}
          </div>
          <div>Author: {props.author}</div>
          <div>Edition: {props.edition} | Book format: {props.format} | Sharing Type: {props.sharing}</div>
          <div>Availability: {props.availability} at {props.location} on {props.date} at {props.time} (owner specified)</div>
        </div>
      </div>
    </div>
  );
}

export default BookResult;

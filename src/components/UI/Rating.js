import classes from "./Rating.module.css";
import ReactStars from "react-stars";

const Rating = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes["stars-container"]}>
        <ReactStars
          count={5}
          edit={false}
          value={props.ratingsAverage}
          size={12}
          color2={"#ffd700"}
        />
      </div>
      <p>{props.ratingsAverage.toFixed(1)}</p>
    </div>
  );
};

export default Rating;

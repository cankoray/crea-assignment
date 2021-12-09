import Card from "../UI/Card";
import classes from "./RatingItem.module.css";
import ReactStars from "react-stars";

const RatingItem = (props) => {
  return (
    <li>
      <Card>
        <div className={classes.container}>
          <ReactStars
            count={5}
            edit={false}
            value={props.rating}
            size={24}
            color2={"#ffd700"}
          />
        </div>
      </Card>
    </li>
  );
};

export default RatingItem;

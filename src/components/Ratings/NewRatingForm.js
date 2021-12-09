import { useState, useContext } from "react";

import classes from "./NewRatingForm.module.css";
import ShopContext from "../../store/shop-context";
import ReactStars from "react-stars";

const NewRatingForm = (props) => {
  const [rating, setRating] = useState(0); // initial rating value
  const shopCtx = useContext(ShopContext);

  const ratingHandler = (rate) => {
    console.log(rate);
    setRating(rate);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    shopCtx.addRating(props.productId, rating);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="rating">Your Rating</label>
        <div className={classes.container}>
          <ReactStars
            count={5}
            value={rating}
            onChange={ratingHandler}
            size={24}
            color2={"#ffd700"}
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Rating</button>
      </div>
    </form>
  );
};

export default NewRatingForm;

import { Fragment } from "react";

import Rating from "../UI/Rating";
import Price from "../UI/Price";

import classes from "./ProductSummary.module.css";

const ProductSummary = (props) => {
  return (
    <Fragment>
      <div className={classes["header-container"]}>
        <p>{props.name}</p>
      </div>
      <div className={classes["rating-container"]}>
        <Rating ratingsAverage={props.ratingsAverage} />
      </div>
      <hr className={classes.line} />
      <Price price={props.price} />
      <div className={classes["desc-container"]}>
        <p>{props.description}</p>
      </div>
      <div className={classes["comment-container"]}>
        <p>{props.commentCount} Comments</p>
      </div>
      <div className={classes["comment-container"]}>
        <p>
          Arrival Date:{" "}
          {new Date(props.arrivalDate).toLocaleDateString("en-US")}
        </p>
      </div>
    </Fragment>
  );
};

export default ProductSummary;

import { Link } from "react-router-dom";
import Card from "../UI/Card";

import classes from "./ProductItem.module.css";
import Rating from "../UI/Rating";
import Price from "../UI/Price";

const imagesCtx = require.context("../../assets/images", true);

const ProductItem = (props) => {
  let image = imagesCtx(`./${props.image}`).default;

  return (
    <Card className={classes.card}>
      <Link to={`/products/${props.id}`}>
        <div className={classes.item}>
          <div className={classes.panel}>
            <img src={image} alt="Product" />
          </div>
          <div className={classes.panel}>
            <Price price={props.price} />
            <p>{props.name}</p>
            <Rating ratingsAverage={props.ratingsAverage} />
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductItem;

import classes from "./HighlightedProduct.module.css";

import ProductSummary from "./ProductSummary";

import "react-tabs/style/react-tabs.css";
import ProductTabs from "./ProductTabs";

const imagesCtx = require.context("../../assets/images", true);

const HighlightedProduct = (props) => {
  let image = imagesCtx(`./${props.image}`).default;

  return (
    <div className={classes.container}>
      <div className={classes.panel}>
        <img src={image} alt="Product" />
      </div>

      <div className={classes.panel}>
        <ProductSummary
          name={props.name}
          ratingsAverage={props.ratingsAverage}
          price={props.price}
          arrivalDate={props.arrivalDate}
          description={props.description}
          commentCount={props.comments.length}
        />

        <ProductTabs
          detailedInfo={props.detailedInfo}
          comments={props.comments}
          ratings={props.ratings}
        />
      </div>
    </div>
  );
};

export default HighlightedProduct;

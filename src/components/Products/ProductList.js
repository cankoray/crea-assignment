import { Fragment } from "react";

import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <Fragment>
      <div className={classes.grid}>
        {props.products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            ratingsAverage={product.ratingsAverage}
            arrivalDate={product.arrivalDate}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ProductList;

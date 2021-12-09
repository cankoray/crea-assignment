import classes from "./ProductDetailedInfo.module.css";

const ProductDetailedInfo = (props) => {
  return (
    <div className={classes.container}>
      <p>{props.text}</p>
    </div>
  );
};

export default ProductDetailedInfo;

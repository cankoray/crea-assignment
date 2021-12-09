import classes from "./Price.module.css";

const Price = (props) => {
  return (
    <div className={classes.container}>
      <span className={classes.symbol}>$</span>
      <span className={classes.whole}>{props.price.toFixed(2)}</span>
    </div>
  );
};

export default Price;

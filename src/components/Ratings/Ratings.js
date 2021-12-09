import { useParams } from "react-router-dom";

import classes from "./Ratings.module.css";
import NewRatingForm from "./NewRatingForm";
import RatingsList from "./RatingsList";

const Ratings = (props) => {
  const params = useParams();

  const { productId } = params;

  let ratings;

  ratings = <RatingsList ratings={props.ratings} />;

  return (
    <section className={classes.ratings}>
      <NewRatingForm productId={productId} />
      <h2>User Ratings</h2>
      {ratings}
    </section>
  );
};

export default Ratings;

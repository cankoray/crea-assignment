import RatingItem from './RatingItem';
import classes from './RatingsList.module.css';

const RatingsList = (props) => {
  return (
    <ul className={classes.ratings}>
      {props.ratings.map((rating) => (
        <RatingItem key={rating.id} rating={rating.rating} />
      ))}
    </ul>
  );
};

export default RatingsList;
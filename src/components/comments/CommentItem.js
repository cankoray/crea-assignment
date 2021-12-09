import classes from "./CommentItem.module.css";
import Card from "../UI/Card";

const CommentItem = (props) => {
  return (
    <li>
      <Card>
        <p>{props.text}</p>
      </Card>
    </li>
  );
};

export default CommentItem;

import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";

const Comments = (props) => {
  const params = useParams();

  const { productId } = params;

  let comments;

  if (props.comments && props.comments.length > 0) {
    comments = <CommentsList comments={props.comments} />;
  }

  if (!props.comments || props.comments.length === 0) {
    comments = <p className="centered">No comments were added yet!</p>;
  }

  return (
    <section className={classes.comments}>
      {<NewCommentForm productId={productId} />}
      <h2>User Comments</h2>
      {comments}
    </section>
  );
};

export default Comments;

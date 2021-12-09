import { useRef, useContext } from "react";

import classes from "./NewCommentForm.module.css";
import ShopContext from "../../store/shop-context";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const shopCtx = useContext(ShopContext);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    shopCtx.addComment(props.productId, enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;

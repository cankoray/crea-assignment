import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";

import HighlightedProduct from "../components/Products/HighlightedProduct";
import ShopContext from "../store/shop-context";

const ProductDetail = () => {
  const shopCtx = useContext(ShopContext);
  const params = useParams();

  const { productId } = params;

  const itemIndex = shopCtx.items.findIndex((item) => item.id === productId);
  const item = shopCtx.items[itemIndex];

  return (
    <Fragment>
      <HighlightedProduct
        name={item.name}
        price={item.price}
        description={item.description}
        image={item.image}
        comments={item.comments}
        ratings={item.ratings}
        ratingsAverage={item.ratingsAverage}
        detailedInfo={item.detailedInfo}
        arrivalDate={item.arrivalDate}
      />
    </Fragment>
  );
};

export default ProductDetail;

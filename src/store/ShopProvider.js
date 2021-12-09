import { useReducer } from "react";

import ShopContext from "./shop-context";
import { data } from "../data/dummy-data";

const shopReducer = (state, action) => {
  if (action.type === "ADD-COMMENT") {
    const existingShopItemIndex = state.items.findIndex(
      (item) => item.id === action.itemId
    );
    const existingShopItem = state.items[existingShopItemIndex];

    const updatedItems = [...state.items];
    if (existingShopItem) {
      const updatedItem = {
        ...existingShopItem,
        comments: existingShopItem.comments.concat({
          id: Math.random().toString(),
          text: action.comment,
        }),
      };
      updatedItems[existingShopItemIndex] = updatedItem;
    }

    return { items: updatedItems };
  }

  if (action.type === "ADD-RATING") {
    const existingShopItemIndex = state.items.findIndex(
      (item) => item.id === action.itemId
    );
    const existingShopItem = state.items[existingShopItemIndex];

    const updatedItems = [...state.items];
    if (existingShopItem) {
      var ratingsSum = action.rating;
      for (let i = 0; i < existingShopItem.ratings.length; i++) {
        ratingsSum += existingShopItem.ratings[i].rating;
      }
      const ratingsAverage = ratingsSum / (existingShopItem.ratings.length + 1);

      const updatedItem = {
        ...existingShopItem,
        ratings: existingShopItem.ratings.concat({
          id: Math.random().toString(),
          rating: action.rating,
        }),
        ratingsAverage: ratingsAverage,
      };
      updatedItems[existingShopItemIndex] = updatedItem;
    }

    return { items: updatedItems };
  }

  return data;
};

const retrieveStoredShop = () => {
  const storedShop = localStorage.getItem("shop");

  if (!storedShop) return { shop: data };

  return {
    shop: JSON.parse(storedShop),
  };
};

const ShopProvider = (props) => {
  const shopData = retrieveStoredShop();

  const initialShop = shopData.shop;

  const [shopState, dispatchShopAction] = useReducer(shopReducer, initialShop);

  localStorage.setItem("shop", JSON.stringify(shopState));

  const addCommentToShopHandler = (itemId, comment) => {
    dispatchShopAction({
      type: "ADD-COMMENT",
      itemId: itemId,
      comment: comment,
    });
  };

  const addRatingToShopHandler = (itemId, rating) => {
    dispatchShopAction({ type: "ADD-RATING", itemId: itemId, rating: rating });
  };

  const shopContext = {
    items: shopState.items,
    addComment: addCommentToShopHandler,
    addRating: addRatingToShopHandler,
  };

  return (
    <ShopContext.Provider value={shopContext}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

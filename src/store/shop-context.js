import React from "react";

const ShopContext = React.createContext({
  items: [],
  addComment: (itemId, comment) => {},
  addRating: (itemId, rating) => {},
});

export default ShopContext;

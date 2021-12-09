import { useContext } from "react";

import ProductList from "../components/Products/ProductList";
import NoProductsFound from "../components/Products/NoProductsFound";
import ShopContext from "../store/shop-context";

const AllProducts = () => {
  const shopCtx = useContext(ShopContext);

  if (!shopCtx.items || shopCtx.items.length === 0) {
    return <NoProductsFound />;
  }

  return <ProductList products={shopCtx.items} />;
};

export default AllProducts;

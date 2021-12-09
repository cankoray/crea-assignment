import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import AuthContext from "./store/auth-context";

import ShopProvider from "./store/ShopProvider";

function App() {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn)
    return (
      <Layout>
        <AuthPage />
      </Layout>
    );

  return (
    <ShopProvider>
      <Layout>
        <Switch>
          <Route path="/auth">
            <Redirect to="/products" />
          </Route>
          <Route path="/" exact>
            <Redirect to="/products" />
          </Route>
          <Route path="/products" exact>
            <AllProducts />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </ShopProvider>
  );
}

export default App;

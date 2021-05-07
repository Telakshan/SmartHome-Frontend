import { Route, Switch, Redirect } from "react-router-dom";

import RegisterAndLogin from "./Pages/RegisterAndLogin/RegisterAndLogin";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Pages/Shop/Shop";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Pages/Contact/Contact";
import Checkout from './Pages/Checkout/Checkout';
import ProductsContextProvider from "./Hooks/Products";
import CartContextProvider from "./Hooks/CartContext";

import "./App.css";

function App() {
  return (
    <ProductsContextProvider>
      <div className="App">
        <CartContextProvider>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={RegisterAndLogin} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path='/checkout' component={Checkout}/>
            {/* <Redirect to="/" /> */}
          </Switch>
        </CartContextProvider>
      </div>
    </ProductsContextProvider>
  );
}

export default App;

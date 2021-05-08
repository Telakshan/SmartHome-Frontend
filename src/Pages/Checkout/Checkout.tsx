import { useContext } from "react";
import { CartContext } from "../../Hooks/CartContext";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import "./Checkout.scss";
import CheckoutCartItem from "../../Components/CheckoutCartItem/CheckoutCartItem";

const Checkout = () => {
  const { cartItems, total, clearCart } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <h3>No items in cart</h3>
      ) : (
        cartItems.map((product) => <CheckoutCartItem key={product.id} product={product} />)
      )}
      <div className="total">
        <h3>Total: ${total} </h3>
      </div>

      {cartItems.length > 0 ? (
        <>
          <p className="clear-cart" onClick={() => clearCart()}>
            Clear Cart
          </p>
          <Button inverted={true}>Proceed to payment</Button>
        </>
      ) : (
        <Link to="/shop">
          <Button inverted={false}>Go to shop</Button>
        </Link>
      )}
    </div>
  );
};

export default Checkout;

import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItems", cartItems);
  if (cartItems && cartItems.length === 0) {
    console.log("no items");
    return <div style={{ textAlign: "center" }}>No Item in the cart</div>;
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => {
          // if (cartItems.findIndex((item) => item.id === cartItem.id)) {
          //   console.log("found", index);
          // }
          return (
            <CartItem
              key={cartItem.id}
              item={{
                id: cartItem.id,
                title: cartItem.title,
                quantity: cartItem.quantity,
                total: cartItem.price * cartItem.quantity,
                price: cartItem.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;

import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  let cartLength;
  if (cartItems && cartItems.length > 0) {
    cartLength = cartItems.reduce((acc, currVal) => acc + currVal.quantity, 0);
  } else cartLength = 0;

  return (
    <button
      className={classes.button}
      onClick={() => dispatch(uiActions.toggle())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartLength}</span>
    </button>
  );
};

export default CartButton;

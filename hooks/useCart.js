import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartLength,
  selectCartTotal,
  selectDishCountInCart,
} from "../redux/slices/cartSlice";

export const useCart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartItemsLength = useSelector(selectCartLength);
  const dishCount = useSelector(selectDishCountInCart);

  return { cartItems, cartTotal, cartItemsLength, dishCount };
};

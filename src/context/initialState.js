import { fetchCart, fetchUser } from "../utils/fetchLocalStoreData";
//import { categories } from "../utils/data";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  foodItems: [],
  cartShow:false,
  cartItems: cartInfo,
};

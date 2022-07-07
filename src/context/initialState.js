import { fetchCart, fetchUser } from '../utills/fetchLocalStorageData'

const userInfo = fetchUser()
const cartInfo = fetchCart()

export const initialState = {
  user: userInfo,
  foodItem: null,
  cartShow: false,
  cartItems: cartInfo,
}

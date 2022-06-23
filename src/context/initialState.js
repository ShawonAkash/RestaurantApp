import { fetchUser } from '../utills/fetchLocalStorageData'

const userInfo = fetchUser()
export const initialState = {
  user: userInfo,
}

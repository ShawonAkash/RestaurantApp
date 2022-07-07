import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../firebase.config'
import { useStateValue } from '../context/StateProvider'
import { motion } from 'framer-motion'
import Logo from '../img/logo.png'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'
import Avatar from '../img/avatar.png'
import { actionType } from '../context/reducer'

const Header = () => {
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue()

  const [isMenu, setIsMenu] = useState(false)

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider)
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      })
      localStorage.setItem('user', JSON.stringify(providerData[0]))
    } else {
      setIsMenu(!isMenu)
    }
  }

  const logout = () => {
    setIsMenu(false)
    localStorage.removeItem('user')

    dispatch({
      type: actionType.SET_USER,
      user: null,
    })
  }

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    })
  }

  return (
    <header className='fixed z-50 w-screen  p-3 px-4 md:p-6 md:px-16 bg-primary'>
      {/*desktop & tablet*/}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-8'
          >
            <li
              className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'
              onClick={() => setIsMenu(false)}
            >
              Home
            </li>
            <li
              className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out '
              onClick={() => setIsMenu(false)}
            >
              Menu
            </li>
            <li
              className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out '
              onClick={() => setIsMenu(false)}
            >
              About Us
            </li>
            <li
              className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out '
              onClick={() => setIsMenu(false)}
            >
              Service
            </li>
          </motion.ul>

          <div
            className='relative flex items-center justify-center'
            onClick={showCart}
          >
            <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer' />
            {cartItems && cartItems.length > 0 && (
              <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'>
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className='relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className='w-10 min-w-[40px] h-10 min-h-[40px] rounded-full shadow-xl cursor-pointer'
              alt='userPic'
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0  '
              >
                {user && user.email === 'mdshawonakash@gmail.com' && (
                  <Link to={'/createItem'}>
                    <p
                      className='flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-base'
                      onClick={() => setIsMenu(false)}
                    >
                      New Item
                      <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  onClick={logout}
                  className='flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-base'
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/*mobile*/}

      <div className='flex items-center justify-between md:hidden w-full h-full'>
        <div
          className='relative flex items-center justify-center'
          onClick={showCart}
        >
          <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer' />
          {cartItems && cartItems.length > 0 && (
            <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>

        <div className='relative'>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className='w-10 min-w-[40px] h-10 min-h-[40px] rounded-full shadow-xl cursor-pointer'
            alt='userPic'
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0  '
            >
              {user && user.email === 'mdshawonakash@gmail.com' && (
                <Link to={'/createItem'}>
                  <p className='flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor'>
                    New Item
                    <MdAdd />
                  </p>
                </Link>
              )}
              <motion.ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className='flex flex-col'
              >
                <li className='text-base text-textColor cursor-pointer hover:bg-slate-100 duration-100 transition-all ease-in-out px-4 py-2'>
                  Home
                </li>
                <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-4 py-2'>
                  Menu
                </li>
                <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-4 py-2'>
                  About Us
                </li>
                <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-4 py-2'>
                  Service
                </li>
              </motion.ul>

              <p
                onClick={logout}
                className='flex items-center justify-center shadow-md text-base m-2 p-2 gap-3 cursor-pointer text-red-700 hover:bg-red-50 transition-all duration-100 ease-in-out'
              >
                Logout
                <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

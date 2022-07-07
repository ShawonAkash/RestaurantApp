import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef()
  const [items, setItems] = useState([])
  const [{ cartItems }, dispatch] = useStateValue()

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    })
    localStorage.setItem('cartItems', JSON.stringify(items))
  }
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue
  }, [scrollValue])

  useEffect(() => {
    addToCart()
  }, [items])

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center my-12 gap-3 scroll-smooth ${
        flag
          ? 'overflow-x-scroll scrollbar-none'
          : 'overflow-x-hidden flex-wrap justify-center'
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className='w-275 min-w-[275px] md:w-300 md:min-w-[300px] h-[175px] my-12 p-2 bg-cardOverlay rounded-lg backdrop-blur-lg hover:drop-shadow-lg flex'
          >
            <div className='w-full h-full flex items-center justify-between'>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageUrl}
                alt=''
                className='w-40 -mt-8 drop-shadow-2xl'
              />
            </div>
            <div className='w-full flex flex-col gap-4 items-end justify-end'>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className='w-8 h-8 rounded-full bg-red-700 flex items-center justify-center cursor-pointer hover:shadow-md'
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className='text-white' />
              </motion.div>
              <p className='text-textColor font-semibold text-base md:text-lg'>
                {item?.title}
              </p>
              <p className='mt-1 text-sm text-gray-500'>
                {item?.calories} calories
              </p>
              <div className='flex items-center gap-8'>
                <p className='text-lg text-headingColor font-semibold'>
                  <span className='text-sm text-red-500'>$</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='w-full flex flex-col items-center justify-center'>
          <img src={NotFound} className='h-340' />
          <p className='text-xl text-headingColor font-semibold my-2'>
            Items Not Available
          </p>
        </div>
      )}
    </div>
  )
}

export default RowContainer

import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../utills/data'

const HomeContainer = () => {
  return (
    <section
      className='grid grid-cols-1 md:grid-cols-2 gap-2 sxl:gap-9 w-full'
      id='home'
    >
      <div className='py-2 flex-1 flex flex-col items-start  justify-center gap-6'>
        <div className='flex items-center gap-2 sxl:gap-4 justify-center bg-orange-100 px-4 sxl:px-8 py-1 sxl:py-2 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-9 h-9  bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img
              src={Delivery}
              alt='delivery'
              className='w-full h-full object-contain'
            />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4.5rem] sxl:text-[5rem] font-bold tracking-wide text-headingColor'>
          The Fastest Delivery in{' '}
          <span className='text-orange-600 text-[3rem] lg:text-[5rem] sxl:text-[6rem]'>
            your City
          </span>
        </p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%] sxl:text-[20px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut eum
          maiores voluptatum suscipit. Suscipit in quis eaque fugiat voluptas
          id, molestiae dicta doloribus quam dolore minus veritatis voluptatibus
          ex!
        </p>
        <button
          type='button'
          className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 sxl:px-6 sxl:py-4 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'
        >
          Order Now
        </button>
      </div>
      <div className='py-2 flex items-center relative'>
        <img
          src={HeroBg}
          alt='hero'
          className='ml-auto h-420 w-full lg:h-650 lg:w-auto '
        />
        <div className='w-full h-full top-0 left-0 absolute flex items-center justify-center lg:px-25 py-5 sxl:py-10 gap-4 xxl:gap-8 xxxl:gap-14 flex-wrap'>
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.imageSrc}
                className=' lg:w-190 xxl:w-225 xxxl:w-250 p-4  bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'
              >
                <img
                  src={n.imageSrc}
                  alt={n.id}
                  className='w-20 lg:w-60 -mt-10 lg:-mt-20'
                />
                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4 xxl:mt-6'>
                  {n.name}
                </p>
                <p className='text-[10px] lg:text-sm xxl:text-lg text-lightTextGray font-semibold my-1 lg:my-3'>
                  {n.description}
                </p>
                <p className='text-sm xxl:text-lg font-semibold'>
                  <span className='text-sm xxl:text-lg text-red-600'>$</span>{' '}
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer

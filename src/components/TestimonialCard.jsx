import React from 'react'
import star from '../assets/image/star.webp'

function TestimonialCard({image, name, message}) {
  return (
    <div className='flex flex-col items-center w-[310px] h-[324px] mb-16 bg-white'>
        <div className='flex justify-center py-4'>
            <img className='w-10 h-10' src={star} alt="star" />
            <img className='w-10 h-10' src={star} alt="star" />
            <img className='w-10 h-10' src={star} alt="star" />
            <img className='w-10 h-10' src={star} alt="star" />
            <img className='w-10 h-10' src={star} alt="star" />
        </div>
        <picture className='flex justify-center'>
            <img className=' w-32 h-32 rounded-full' src={image} alt="client" />
        </picture>
        <h3 className='flex justify-center py-4 font-Markazy text-blacklim text-3xl font-bold'> {`${name}`}
        </h3>
        <p className='w-auto font-Karla text-blacklim text-xl text-center'>
            {`"${message}"`}
        </p>
    </div>
  )
}

export default TestimonialCard
import React from 'react'

function SpecialCard({image, title, message}) {
  return (
    <div className='w-[370px] h-[700px] rounded-t-3xl bg-graylim shadow-2xl'>
        <img className='w-full h-80 rounded-t-3xl' src={image} alt={`${title}`} />
        <h2 className='px-6 text-blacklim font-Markazy font-medium text-[44px]'>{`${title}`}</h2>
        <p className='px-6 mb-10 text-blacklim font-Karla font-medium text-[20px]'>{`${message}`}</p>
        <span className='px-6 text-blacklim font-Karla font-medium text-[24px]'>Order Delivery</span>
    </div>
  )
}

export default SpecialCard
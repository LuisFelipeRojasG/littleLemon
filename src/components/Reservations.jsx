import React, { useEffect } from 'react'
import { useAuth } from '../context/context'

function Reservations() {

const { getReserv, reservation } = useAuth()

useEffect(() => {
  getReserv()
}, [])

  return (
    <div className='grid grid-cols-2'>
      {reservation.map((data, index) => (
        <div key={index} className='grid grid-cols-2 items-center bg-greenlim m-5 p-5 rounded-3xl'>
          <h1 className=' col-span-2 text-yellowlim font-Markazy font-medium text-[64px]'>Reservation</h1>
          <label className='text-whitelim font-Karla font-light text-[54px]'>Date</label>
          <p className=' text-yellowlim font-Markazy font-medium text-[34px] px-3'>{data.date}</p>
          <label className='text-whitelim font-Karla font-light text-[54px]'>Time</label>
          <p className=' text-yellowlim font-Markazy font-medium text-[34px] px-3'>{data.time}</p>
          <label className='text-whitelim font-Karla font-light text-[54px]'>Table</label>
          <p className=' text-yellowlim font-Markazy font-medium text-[34px] px-3'>{data.table}</p>
          <label className='text-whitelim font-Karla font-light text-[54px]'>Occasion</label>
          <p className=' text-yellowlim font-Markazy font-medium text-[34px] px-3'>{data.occasion}</p>
        </div>
      ))}
    </div>
  )
}

export default Reservations
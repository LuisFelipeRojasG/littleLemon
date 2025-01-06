import React from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {

const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center w-[510px] md:w-[650px] bg-greenlim m-5 p-5 rounded-3xl'>
      <h1 className=' text-yellowlim font-Markazy font-medium text-[64px]'>Reservation Successful</h1>
      <button className='mb-5 p-2 rounded-full bg-yellowlim text-center' onClick={() => navigate('/littleLemon')}
        >Return Home</button>
      <button className='mb-5 p-2 rounded-full bg-yellowlim text-center' value="Make Your reservation" onClick={() => navigate('/booking')}
        >Make another reservation</button>
    </div>
  )
}

export default Success
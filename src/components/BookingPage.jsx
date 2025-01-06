import React from 'react'
import BookingForm from './BookingForm'

function BookingPage() {
  return (
    <div id='bookingPage' className='flex flex-col items-center w-[500px] md:w-[650px] bg-greenlim m-5 p-5 rounded-3xl'>
      <h1 className=' text-yellowlim font-Markazy font-medium text-[64px]'>Reserve Table</h1>
      <BookingForm />
    </div>
  )
}

export default BookingPage
import React from 'react'
import { useAuth } from '../context/context'
import { useNavigate } from 'react-router-dom'

function BookingForm() {

  const navigate = useNavigate()

  const {
    availableTimes,
    initializeTimes,
    date,
    setDate,
    time, 
    setTime,
    table,
    setTable,
    occasion,
    setOccasion,
    newReserv
  } = useAuth()
  
  const onSubmit = (e) => {
    e.preventDefault()
    const data = {date, time, table, occasion}
    newReserv(data)
  }

  return (
    <form className='flex flex-col' onSubmit={onSubmit}>
        <label className='text-whitelim font-Karla font-light text-[26px]' htmlFor='res-date'>Choose date</label>
        <input 
          className='mb-5 p-2 rounded-full' 
          type='date' 
          id='res-date'
          onChange={e => setDate(e.target.value)}
        />
        <label className='text-whitelim font-Karla font-light text-[26px]'  htmlFor='res-time'>Choose time</label>
        <select 
          className='mb-5 p-2 rounded-full' 
          id='res-time'
          onChange={e => setTime(e.target.value)}
        >
          <option>Select time</option>
            {initializeTimes.map((e, index) => 
              <option value={e.time} key={index}>{e.time}</option>
            )}
            
        </select>
        <label className='text-whitelim font-Karla font-light text-[26px]'  htmlFor="guests">Choose a table</label>
        <input 
          className='mb-5 p-2 rounded-full'
          id="res-table"
          onChange={e => setTable(e.target.value)}
        />
        <label className='text-whitelim font-Karla font-light text-[26px]'  htmlFor="occasion">Occasion</label>
        <select 
          className='mb-10 p-2 rounded-full' 
          id="res-occasion"
          onChange={e => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <button className='mb-5 p-2 rounded-full bg-yellowlim text-center' typeof="submit" value="Make Your reservation" onClick={() => 
    navigate('/Success')}>Make Your reservation</button>
    </form>
  )
}

export default BookingForm

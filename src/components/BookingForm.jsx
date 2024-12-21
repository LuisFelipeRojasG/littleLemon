import React from 'react'
import { useAuth } from '../context/context'



function BookingForm() {

  const {
    availableTimes,
    initializeTimes,
    date,
    setDate,
    time, 
    setTime,
    tables,
    setTables,
    occasion,
    setOccasion
  } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviado", date, time, tables, occasion)
  }
  

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
        <label className='text-whitelim font-Karla font-light text-[26px]' htmlFor='res-date'>Choose date</label>
        <input 
          className='mb-5 p-2 rounded-full' 
          type='date' 
          id='res-date' 
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <label className='text-whitelim font-Karla font-light text-[26px]'  htmlFor='res-time'>Choose time</label>
        <select 
          className='mb-5 p-2 rounded-full' 
          id='res-time'
          value={date}
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
          type="number" 
          placeholder="1" 
          min="1" 
          max="10" 
          id="tables" 
          value={tables}
          onChange={e => setTables(e.target.value)}
        />
        <label className='text-whitelim font-Karla font-light text-[26px]'  htmlFor="occasion">Occasion</label>
        <select 
          className='mb-10 p-2 rounded-full' 
          id="occasion" 
          value={occasion}
          onChange={e => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <button className='mb-5 p-2 rounded-full bg-yellowlim text-center' typeof="submit" value="Make Your reservation">Make Your reservation</button>
    </form>
  )
}

export default BookingForm

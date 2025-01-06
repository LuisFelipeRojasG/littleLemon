import React from 'react'
import { useAuth } from '../context/context'
import { useNavigate } from 'react-router-dom'

function BookingForm() {

  const navigate = useNavigate()

  const {
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

  const times = [
    {time: ''},
    {time: '17:00'},
    {time: '18:00'},
    {time: '19:00'},
    {time: '20:00'},
    {time: '21:00'},
    {time: '22:00'}
  ]

  const tables = [
    {table: ''},
    {table: 'Mesa para 2'},
    {table: 'Mesa para 3'},
    {table: 'Mesa para 4'},
    {table: 'Mesa para grupos'}
  ]

  const onSubmit = (e) => {
    e.preventDefault()
    const data = {date, time, table, occasion}
    newReserv(data)
    document.getElementById('res-reserv').reset()
  }

  return (
    <form id='res-reserv' className='flex flex-col' onSubmit={onSubmit}>
        <label className='text-whitelim font-Karla font-light text-[26px]' htmlFor='res-date'>Choose date</label>
        <input 
          className='w-auto mb-5 p-2 rounded-full' 
          type='date' 
          id='res-date'
          onChange={e => setDate(e.target.value)}
        />
        <label className='text-whitelim font-Karla font-light text-[26px]'  htmlFor='res-time'>Choose time</label>
        <select 
          className='w-auto mb-5 p-2 rounded-full' 
          id='res-time'
          onChange={e => setTime(e.target.value)}
        >
          {times.map((e, index) => 
            <option value={e.time} key={index}>{e.time}</option>
          )}
        </select>
        <label className='text-whitelim font-Karla font-light text-[26px]'  htmlFor="guests">Choose a table</label>
        <select 
          className='w-auto mb-5 p-2 rounded-full'
          id="res-table"
          onChange={e => setTable(e.target.value)}
        >
           {tables.map((e, index) => 
            <option value={e.table} key={index}>{e.table}</option>
          )}
        </select>
        <label className='text-whitelim font-Karla font-light text-[26px]'  htmlFor="occasion">Occasion</label>
        <select 
          className='w-auto mb-10 p-2 rounded-full' 
          id="res-occasion"
          onChange={e => setOccasion(e.target.value)}>
            <option></option>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <button className='mb-5 p-2 rounded-full bg-yellowlim text-center' typeof="submit" value="Make Your reservation" onClick={() => navigate('/success')}
        >Make Your reservation</button>
    </form>
  )
}

export default BookingForm

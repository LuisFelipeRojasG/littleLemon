import React from 'react'
import { NavLink } from "react-router-dom"

function Nav() {

  return (
    <div className='w-screen hidden md:block md:col-start-7 md:col-span-5 md:px-8 lg:col-start-3 '>
      <ul role='menu' className='w-auto flex flex-wrap justify-center gap-5'>
        <li className='text-2xl font-Karla font-medium '>
          <NavLink role='menuitem' to={'/littleLemon'} >Home</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium'>
          <NavLink role='menuitem' to={'/littleLemon'} >About</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium'>
          <NavLink role='menuitem' to={'/littleLemon'} >Menu</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium'>
          <NavLink role='menuitem' to={'/booking'}>Reserv Table</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium'>
          <NavLink role='menuitem' to={'/reservations'}>Reservations</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
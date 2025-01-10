import React from 'react'
import { NavLink } from "react-router-dom"

function Nav() {
  
  return (
    <div className='w-auto hidden md:block md:col-start-7 md:col-span-5'>
      <ul role='menu' className='w-auto flex justify-between'>
        <li className='text-2xl font-Karla font-medium gap-5'>
          <NavLink role='menuitem' to={'/littleLemon'} >Home</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium gap-5'>
          <NavLink>About</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium gap-5'>
          <NavLink>Menu</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium gap-5'>
          <NavLink role='menuitem' to={'/booking'}>Reserv Table</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium gap-5'>
          <NavLink role='menuitem' to={'/reservations'}>Reservations</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium gap-5'>
          <NavLink>Order online</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium gap-5'>
          <NavLink>Login</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
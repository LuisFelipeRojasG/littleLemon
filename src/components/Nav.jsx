import React from 'react'
import { NavLink } from "react-router-dom"

function Nav() {
  
  return (
    <div className='col-start-7 col-end-12'>
      <ul>
        <li className='flex text-2xl font-Karla font-medium gap-5'>
          <NavLink to={'/littleLemon'} >Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Menu</NavLink>
          <NavLink to={'/booking'}>Reserv Table</NavLink>
          <NavLink to={'/reservations'}>Reservations</NavLink>
          <NavLink>Order online</NavLink>
          <NavLink>Login</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
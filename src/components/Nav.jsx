import React from 'react'

function Nav() {
  return (
    <div className='col-start-7 col-end-12'>
      <ul>
        <li className='flex text-2xl font-Karla font-medium gap-5'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Menu</a>
          <a href="">Reservations</a>
          <a href="">Order online</a>
          <a href="">Login</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
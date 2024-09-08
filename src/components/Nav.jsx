import React from 'react'
import Logo from '../assets/image/Logo.svg'

function Nav() {
  return (
    <>
      <img src={Logo} alt="Little Lemon" />
      <ul>
        <li>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Menu</a>
          <a href="">Reservations</a>
          <a href="">Order online</a>
          <a href="">Login</a>
        </li>
      </ul>
    </>
  )
}

export default Nav
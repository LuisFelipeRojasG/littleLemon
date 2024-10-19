import React from 'react'
import Logo from '../assets/image/Logo.svg'
import Nav from '../components/Nav'

function Header() {
  return (
    <div className='w-screen grid grid-cols-12 items-center pt-10 pb-10'>
      <img className='col-start-2 col-end-4 w-80' src={Logo} alt="Little Lemon" />
      <Nav />
    </div>
  )
}

export default Header
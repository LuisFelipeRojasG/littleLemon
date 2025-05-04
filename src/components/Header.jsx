import React from 'react'
import Icon from '../assets/icon/Logo.webp'
import Logo from '../assets/image/Logo.svg'
import Nav from '../components/Nav'
import { IoMdMenu } from "react-icons/io";

function Header() {
  return (
    <div className='w-screen flex justify-between md:grid md:grid-cols-12 items-center py-5 md:py-10'>
      <img className='w-14 ml-5 md:hidden' src={Icon} alt="Little Lemon"  />
      <img className='hidden md:block md:col-start-2 md:col-end-4 md:w-80' src={Logo} alt="Little Lemon" />
      <Nav />
      <IoMdMenu className='md:hidden pr-8' size={50} />
    </div>
  )
}

export default Header
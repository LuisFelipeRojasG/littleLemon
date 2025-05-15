import React from 'react'
import Icon from '../assets/icon/Logo.webp'
import Logo from '../assets/image/Logo.svg'
import Nav from '../components/Nav'
import { IoMdMenu } from "react-icons/io";

function Header() {
  return (
    <div className='w-screen flex flex-col justify-between md:py-10 lg:grid lg:grid-cols-12 items-center py-5 '>
      <img className='w-14 ml-5 md:hidden' src={Icon} alt="Little Lemon"  />
      <img className='hidden md:block md:col-start-2 md:col-end-4 md:w-80 md:ml-8 md:mb-10 lg:col-start-1 lg:col-end-3 lg:mb-0' src={Logo} alt="Little Lemon" />
      <Nav />
      <IoMdMenu className='md:hidden pr-8' size={50} />
    </div>
  )
}

export default Header
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Menu from '../components/Menu'
import { useAuth } from '../context/context'

function Layout() {

  const { menuOpen } = useAuth()

  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Menu status={menuOpen}/>
      <Outlet />
      <Footer />
      
    </div>
  )
}

export default Layout
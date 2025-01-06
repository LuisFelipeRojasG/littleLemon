import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Main from './Main.jsx'

function Layout() {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Outlet />
      <Footer />
      
    </div>
  )
}

export default Layout
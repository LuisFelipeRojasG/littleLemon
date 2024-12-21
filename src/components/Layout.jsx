import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Main from './Main.jsx'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      
    </>
  )
}

export default Layout
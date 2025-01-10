import React from 'react'
import { useNavigate, useRouteError } from "react-router-dom"

const NoMatchRoute = () => {

  navigate = useNavigate()
  const error = useRouteError()

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <h1 className='mb-16 text-4xl font-bold'>Oops!</h1>
      <p className='mb-16 text-3xl'>Sorry, an unexpected error has occurred.</p>
      <p className='mb-16 text-xl'>
        <i>{error.statusText || error.message}</i>
      </p>
      <button 
        className='text-xl'
        aria-label='Return home'
        onClick={() => navigate('/littleLemon')}
      >
        return
      </button>
    </div>
  )
}

export default NoMatchRoute
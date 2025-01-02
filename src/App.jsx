import { LemonProvider } from './context/context.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Main from './components/Main'
import BookingPage from './components/BookingPage'
import Reservations from './components/Reservations.jsx'
import Success from './components/results/Success.jsx'

const router = createBrowserRouter([
  
  {
    element: <Layout />,
    errorElement: <NoMatchRoute />,
    children: [
      {
        path: '/littleLemon',
        element: <Main />
      },
      {
        path: '/booking',
        element: <BookingPage />
      },
      {
        path: '/reservations',
        element: <Reservations />
      },
      {
        path: '/success',
        element: <Success />
      },
    ]
  }
])


function App() {

  return (
    <LemonProvider>
      <div className=" w-screen flex flex-col items-center">
        <RouterProvider router={router} />
      </div>
    </LemonProvider>
  )
}

export default App

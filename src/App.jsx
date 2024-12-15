import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import BookingPage from './components/BookingPage'
import { LemonProvider } from './context/context.jsx'

function App() {

  return (
    <LemonProvider>
      <div className=" w-screen flex flex-col items-center">
        <Header/>
        {/*<Main />*/}
        <BookingPage />
        <Footer />
      </div>
    </LemonProvider>
  )
}

export default App

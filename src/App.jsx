import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Navbar from './Components/Navbar'
import Header from './Components/Header'
// import MainComponent from './Components/MainComponent'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <Header />
      {/* <MainComponent /> */}
      <Footer />
      

    </>
  )
}

export default App

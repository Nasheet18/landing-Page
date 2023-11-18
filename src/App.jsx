import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import CatagoryPage from './components/CatagoryPage'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Service from './components/Service'

function App() {


  return (
    <>
    <Navbar />
    <HomePage />
    <CatagoryPage />
    <About />
    <Service />
    <Contact />
    <Footer />
    </>
  )
}

export default App

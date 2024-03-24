import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import ContactUs from './ContactUs'
import Profile from './Profile'
function App() {
  return (
    <>
       <Router>
           <Navbar/>
           <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contactus" element={<ContactUs/>} />
              <Route path="/profile" element={<Profile/>} />
           </Routes>
       </Router>
    </>
  )
}

export default App

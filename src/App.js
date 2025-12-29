import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Plans from './pages/Plans'
import Contact from './pages/Contact'
import NewMember from './pages/NewMember'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/new-member' element={<NewMember />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

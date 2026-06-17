import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Routes , Route } from 'react-router-dom'

function App() {
 

  return (
   <div className='min-h-screen bg-zinc-950 text-white'>
      <Navbar />

      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/about" element = {<About />} />
        <Route path="/project" element = {<Projects />} />
        <Route path="/Contact" element = {<Contact />} />
      </Routes>

    

   </div>
  )
}

export default App

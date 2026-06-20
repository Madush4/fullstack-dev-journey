import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Routes , Route } from 'react-router-dom'

function App() {
 

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className=" pt-20 px-7 max-w-5xl mx-auto sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App

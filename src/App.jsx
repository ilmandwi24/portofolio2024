import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portofolio from './components/Portofolio'
import Skill from './components/Skill'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto">
        <Navbar />
      </div>
      <Hero />
      <Portofolio />
      <Skill />
      <Experience />
      <Contact />
      <Footer />


    </>
  )
}

export default App

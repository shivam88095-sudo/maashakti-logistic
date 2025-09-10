import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// removed import './App.css' because global styles are in index.css
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Profile from './components/profile.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'


function App() {
   

  return (

    <BrowserRouter>

      <div className="content-wrapper">
        <Header />
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  )
}

export default App;

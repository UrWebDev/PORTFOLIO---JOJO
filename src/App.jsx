import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Skill from './page/Skill'
import About from './page/About'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />}/>
                <Route path='/skills' element={<Skill />} />
                <Route path='/about' element={<About />} />
                <Route />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
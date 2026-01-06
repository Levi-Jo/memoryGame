import React from 'react'
import Layout from './components/Layouts/Layout.jsx'
import GameLayout from './components/Layouts/GameLayout.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage.jsx'
import Game from './components/Game.jsx'
function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />
          <Route path="*" element={<h2>404 Not Found</h2>}/>
        </Route>
        <Route element={<GameLayout />}>
          <Route path="/easy" element={<Game level="easy" />} />
          <Route path="/medium" element={<Game level="medium" />} />
          <Route path="/hard" element={<Game level="hard" />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

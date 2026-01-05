import React from 'react'
import Layout from './components/Layout.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage.jsx'
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
      </Routes>
    </Router>
  )
}

export default App

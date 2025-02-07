import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import HomePage from './components/HomePage'
import Countdown from './components/EventCountDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracks" element={<Countdown />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

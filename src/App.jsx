import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Countdown from './components/EventCountDown';
import Loader from './components/Loader/Loader'; // Import the Loader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the loader for 10 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Display loader while loading is true
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tracks" element={<Countdown />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Countdown from './components/EventCountDown';
import Loader from './components/Loader/Loader';
import Scrollbar from './components/ScrollBar/ScrollBar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Scrollbar /> {/* Add Scrollbar globally */}
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/tracks" element={<Countdown />} /> */}
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import VolunteerSignup from './pages/VolunteerSignup';
import NgoSignup from './pages/NgoSignup';
import Terms from './pages/Terms';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup/volunteer" element={<VolunteerSignup />} />
        <Route path="/signup/ngo" element={<NgoSignup />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

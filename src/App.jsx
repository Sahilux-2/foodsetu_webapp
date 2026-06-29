import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import VolunteerSignup from './pages/VolunteerSignup';
import NgoSignup from './pages/NgoSignup';
import Terms from './pages/Terms';
import Home from './pages/Home';
import CollegeDetails from './pages/CollegeDetails';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
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
        <Route path="/college/:id" element={<CollegeDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

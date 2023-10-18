import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/HomePage';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';
import Pqr from './Pages/pqr';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/pqr" element={<Pqr />} />
    </Routes>
  );
}

export default App;

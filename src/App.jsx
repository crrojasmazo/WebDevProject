import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/HomePage';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';
import Pqr from './Pages/pqr';
import Layout from './Layouts/Layout';
import { UserContext } from './Context/Context';

const App = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    isAuth: false,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/pqr" element={<Pqr />} />
        </Routes>
      </Layout>
    </UserContext.Provider>
  );
};

export default App;

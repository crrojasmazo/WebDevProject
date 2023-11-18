import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
import Pqr from "./Pages/pqr";
import Layout from "./Layouts/Layout";
import { UserContext } from "./Context/Context";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProfilePage from "./Pages/ProfilePage";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isAuth: false,
  });

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route
            path="/pqr"
            element={
              <ProtectedRoute user={user}>
                <Pqr />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </UserContext.Provider>
  );
};

export default App;

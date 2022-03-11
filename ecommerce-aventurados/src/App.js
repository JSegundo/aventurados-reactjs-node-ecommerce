import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import AuthProvider from "./contexts/AuthContext";

import Carrito from "./components/Carrito";
import Fav from "./components/Fav";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import Campestre from "./commons/Campestre";
import Ciclismo from './commons/Ciclismo'
import Spa from './commons/Spa'
import Paintboll from './commons/Paintboll'

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/paintboll" element={<Paintboll />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/campestre" element={<Campestre />} />
          <Route path="/ciclismo" element={<Ciclismo />} />

          <Route
            path="/shopping"
            element={
              <ProtectedRoutes>
                <Carrito />
              </ProtectedRoutes>
            }
          />
          <Route path="/fav" 
          element={
            <ProtectedRoutes>
              <Fav />
            </ProtectedRoutes>
          } />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;

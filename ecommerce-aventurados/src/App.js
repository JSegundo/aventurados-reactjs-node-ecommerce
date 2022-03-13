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

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/shopping"
            element={
              <ProtectedRoutes>
                <Carrito />
              </ProtectedRoutes>
            }
          />
          <Route path="/fav" element={<Fav />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;

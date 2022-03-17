import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import AuthProvider from "./contexts/AuthContext";

import AdminProfile from "./commons/AdminProfile";
import Carrito from "./components/Carrito";
import Fav from "./components/Fav";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { ProtectedAdminRoutes } from "./components/ProtectedAdminRoutes";
import Campestre from "./commons/Campestre";
import Ciclismo from "./commons/Ciclismo";
import Spa from "./commons/Spa";
import SingleView from "./components/SingleView";

import AdminEditProduct from "./commons/AdminEditProduct";
function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/single" element={<SingleView />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/campestre" element={<Campestre />} />
          <Route path="/ciclismo" element={<Ciclismo />} />

          <Route path="/:category" element={<Ciclismo />} />

          {/* ADMIN */}

          <Route
            path="/admin/edit/products/:id"
            element={<AdminEditProduct />}
          />
          {/* 
          <Route
            path="/admin/edit/products/:id"
            render={({ match }) => {
              <ProtectedAdminRoutes>
                <AdminEditProduct id={match.params.id} />
              </ProtectedAdminRoutes>;
            }}
          /> */}
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoutes>
                <AdminProfile />
              </ProtectedAdminRoutes>
            }
          />
          {/* ADMIN */}

          <Route
            path="/shopping"
            element={
              <ProtectedRoutes>
                <Carrito />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/fav"
            element={
              <ProtectedRoutes>
                <Fav />
              </ProtectedRoutes>
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;

import "./App.css"
import * as React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App

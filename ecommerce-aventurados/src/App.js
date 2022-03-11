import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import AuthProvider from "./contexts/AuthContext";
<<<<<<< HEAD

import Carrito from "./components/Carrito";
import Fav from "./components/Fav";

=======
>>>>>>> 9071a7a7f9e98ea7aa71ff6163dd9f29a075b69b

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
<<<<<<< HEAD

          <Route path="/shopping" element={<Carrito />} />
          <Route path="/fav" element={<Fav />} />

=======
>>>>>>> 9071a7a7f9e98ea7aa71ff6163dd9f29a075b69b
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
<<<<<<< HEAD

}  

=======
}
>>>>>>> 9071a7a7f9e98ea7aa71ff6163dd9f29a075b69b

export default App;

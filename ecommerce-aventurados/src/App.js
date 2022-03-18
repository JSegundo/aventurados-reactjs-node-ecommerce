import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Home from "./components/Home";
import { useAuth } from "./contexts/AuthContext";

import Carrito2 from "./components/Carrito2";
import Fav from "./components/Fav";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { ProtectedAdminRoutes } from "./components/ProtectedAdminRoutes";
import SingleView from "./components/SingleView";

import AdminProfile from "./commons/AdminProfile";
import CategoriesView from "./components/CategoriesView";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "./state/favourites";
import { setUser } from "./state/user";
import AllProducts from "./components/AllProducts";

import AdminEditProduct from "./commons/AdminEditProduct";
import AdminEditCategory from "./commons/AdminEditCategory";
import AdminEditOrder from "./commons/AdminEditOrder";


import AdminAddNewProduct from "./commons/AdminAddNewProduct";

import { getCarrito } from "./state/carrito";
function App() {
  const { currentUser } = useAuth();

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!currentUser) return;
    if (!currentUser.email) return;
    dispatch(setUser(currentUser.uid));
  }, [currentUser]);

  const dataUser = useSelector((state) => state.dataUser);

  React.useEffect(() => {
    if (!dataUser) return;
    if (!dataUser.email) return;
    dispatch(getFavorite(dataUser.id));
    dispatch(getCarrito({ userId: dataUser.id }));
  }, [dataUser, dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/single/:id" element={<SingleView />} />
        <Route path="/category/:cat/:id" element={<CategoriesView />} />
        <Route path="/allproducts" element={<AllProducts />} />

        {/* ADMIN */}

          {/* ADMIN */}

          <Route
            path="/admin/edit/products/:id"
            element={<AdminEditProduct />}
          />
          <Route
            path="/admin/edit/categories/:id"
            element={<AdminEditCategory />}
          />
          <Route
            path="/admin/edit/orders/:id"
            element={<AdminEditOrder />}
          />
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoutes>
                <AdminProfile />
              </ProtectedAdminRoutes>
            }
          />
          {/* ADMIN */}
        <Route path="/admin/add/product" element={<AdminAddNewProduct />} />
      {/*   <Route path="/admin/edit/products/:id" element={<AdminEditProduct />} />
 */}        <Route
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
              <Carrito2 />
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
        <Route
          path="/miperfil"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

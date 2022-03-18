import { Navigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useSelector } from "react-redux";

export function ProtectedAdminRoutes({ children }) {
  const { currentUser, loading } = useAuth();
  const [user, setUser] = useState();
  const dataUser = useSelector((state) => state.dataUser);

  // useEffect(() => {
  //   async function verifyAdmin() {
  //     const adminOrNot = await axios.get(
  //       `http://localhost:3001/api/user/me/${currentUser.uid}`
  //     );
  //     //   console.log("objeto de usuario de db: ", adminOrNot.data);
  //     setUser(adminOrNot.data);
  //     // if (!user.admin) return <Navigate to="/" />;
  //   }
  //   verifyAdmin();
  // }, []);

  if (loading) return <h1>loading...</h1>;

  if (!currentUser) return <Navigate to="/login" />;

  if (!dataUser.admin) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default ProtectedAdminRoutes;

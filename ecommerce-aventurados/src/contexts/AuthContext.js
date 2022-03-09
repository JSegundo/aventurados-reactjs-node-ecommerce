import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

const AuthContext = createContext();

export function useAuth() {
  // hook que nos va a dar acceso a el contexto.
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return createUserWithEmailAndPassword(email, password); // función de firebase para crear usuario.
  }

  useEffect(() => {
    //"onAuthStateChanged": esta función "escucha" cuando se creó un usuario,
    // recibe el usuario, y lo seteamos a nuestro state con setCurrentUser.
    // lo usamos dentro de useEffect xq queremos que se ejectute SOLO cuando el usuario es creado.
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsuscribe;

    // "onAuthStateChanged" retorna un metodo que "deshabilita" el onAuthStateChanged para evitar setear devuelta el usuario. Ese metodo se guarda en "unsuscribe"
  }, []);

  const value = {
    currentUser,
    signup,
  };
  // "value" nos va a proveer de toda la información que vamos a necesitar
  // para realizar la autenticación.

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

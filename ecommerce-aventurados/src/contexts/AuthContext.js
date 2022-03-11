import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
const AuthContext = createContext();

export function useAuth() {
  // hook que nos va a dar acceso a el contexto.
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password); // función de firebase para crear usuario.
  }

  async function login(email, password) {
    await setPersistence(auth, browserLocalPersistence);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth)
      .then(() => {
        console.log("Loged out succesfully");
      })
      .catch((error) => {
        console.error("An error ocurred while log out attemp", error);
      });
  }

  useEffect(() => {
    //"onAuthStateChanged": esta función "escucha" cuando se creó un usuario,
    // recibe el usuario, y lo seteamos a nuestro state con setCurrentUser.
    // lo usamos dentro de useEffect xq queremos que se ejectute SOLO cuando el usuario es creado.
    const unsuscribe = auth.onAuthStateChanged((user) => {
      console.log("user", user);
      setCurrentUser(user);
      setLoading(false);
    });
    return unsuscribe;

    // "onAuthStateChanged" retorna un metodo que "deshabilita" el onAuthStateChanged para evitar setear devuelta el usuario. Ese metodo se guarda en "unsuscribe"
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };
  // "value" nos va a proveer de toda la información que vamos a necesitar
  // para realizar la autenticación.

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

import React, { useEffect, useState } from "react";
import axios from "axios";

import { useAuth } from "../contexts/AuthContext.js";

const AdminAllCategories = () => {
  const { currentUser } = useAuth();

  const [allCategories, setAllCategories] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const catego = await axios.get(`http://localhost:3001/api/categories`);
        console.log("categorias", catego);
        setAllCategories(catego.data);
        console.log("allCategories state: ", allCategories);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
return (
    
      <div>
        <h2>todas las categories</h2>
        <ul>
          {allCategories.map((categoria, i) => (
            <li key={i}>
              <h3>{categoria.name}</h3>
              <img src={`${categoria.image}`} />
            </li>
          ))}
        </ul>
      </div>
          
  );
};


export default AdminAllCategories;

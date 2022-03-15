import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext.js";

const AdminAllProducts = () => {
  const { currentUser } = useAuth();

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await axios.get(`http://localhost:3001/api/products`);
        console.log("products", products);
        setAllProducts(products.data);
        console.log("allProducts state: ", allProducts);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h2>Products</h2>
        <ul>
          {allProducts.map((product, i) => (
            <li key={i}>
              <h3>{product.name}</h3>
              <p> {product.description}</p>
              <img src={`${product.image}`} />
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminAllProducts;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

const Carrousel1 = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/categories")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide carr1"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner carousa">
        {categories.map((categorie, i) =>
          i == 0 ? (
            <div position="relative" className="carousel-item active asd">
              <img
                src={categorie.image}
                className="d-block w-100 carr1"
                alt="imagen"
              />
            </div>
          ) : (
            <div className="carousel-item">
              <img
                src={categorie.image}
                className="d-block w-100 carr1"
                alt="imagen"
                position="relative"
              />
            </div>
          )
        )}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrousel1;

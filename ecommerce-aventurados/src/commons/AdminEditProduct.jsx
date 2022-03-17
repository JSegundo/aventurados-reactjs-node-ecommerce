import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getClickedProduct } from "../state/selectedProduct";

const AdminEditProduct = () => {
  const { id } = useParams();
  console.log(id);

  const product = useSelector((store) => store.selectedProduct);
  const dispatch = useDispatch();

  console.log(product);

  return (
    <>
      <img src={product.image} />
    </>
  );
};

export default AdminEditProduct;

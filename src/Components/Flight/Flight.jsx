import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product"

export default function Flight(children) {
  const [product, setProduct] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get("http://localhost:3031/flight1");
      console.log(res);
      setProduct(res.data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(product);

  return isLoading ? (
    <div>
      <h1 style={{ textAlign: "center" }}>PAGE LOADING</h1>
    </div>
  ) : isError ? (
    <div>
      <h1 style={{ textAlign: "center" }}>404 PAGE NOT FOUND</h1>
    </div>
  ) : (
    <div className="Productitems">
      {product.map((e) => {
        return <Product e={e} />;
      })}
    </div>
  );
}

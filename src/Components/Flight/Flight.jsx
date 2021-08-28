import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { FlightContext } from "./FlightContextProvider";
import Product from "./Product"

export default function Flight(children) {
  const [product, setProduct] = useState([]);

  const{city}=useContext(FlightContext);

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
  console.log("CityContext",city)

  const filtercity=(item)=>{
    
    if(city.length != 0){
      return city[0] == item.cityname1 && city[1] == item.cityname2;
    }
    return true;
  }
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
      {product.filter(filtercity).map((e,index) => {
        return <Product key={index} e={e} />;
      })}
    </div>
  );
}

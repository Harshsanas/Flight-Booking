import React, { createContext, useState } from "react";

export const FlightContext = createContext();

const FlightContextProvider = ({ children }) => {
  const [flight, setFlight] = useState([]);
  const [city,setCity]=useState([]);

  const AddCity=(value)=>{
    console.log("city", value);
    setCity(value);
  }

  const AddtoFlight = (items) => {
    flight.push(items);
    setFlight(flight);
  };

  const value = { flight, setFlight, AddtoFlight, AddCity,city };

  return <FlightContext.Provider value={value}>{children}</FlightContext.Provider>;
};
export default FlightContextProvider;

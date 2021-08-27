import React, { createContext, useState } from "react";

export const FlightContext = createContext();

const FlightContextProvider = ({ children }) => {
  const [flight, setFlight] = useState([]);

  const AddtoFlight = (items) => {
    flight.push(items);
    setFlight(flight);
  };

  const value = { flight, setFlight, AddtoFlight };

  return <FlightContext.Provider value={value}>{children}</FlightContext.Provider>;
};
export default FlightContextProvider;

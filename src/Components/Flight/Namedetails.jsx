import React,{useContext}from 'react'
import styled from "styled-components"
import {FlightContext} from "./FlightContextProvider"

export default function Namedetails({cityName}) {

  const {city} = useContext(FlightContext)
    console.log(cityName)
    const NAMES = styled.div`
    margin-top:50px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    p{
        font-size: 26px;
        font-weight:500;
    }
    `;

    return (
      <div>
      {city.length != 0 &&
        <NAMES>
          <div className="names">
          
            <p>
              {cityName.origincity} &#62; {cityName.destinationcity} &#62;{" "}
              {cityName.origincity}
            </p>
          </div>
          <div>
            DEPART : {cityName.tripstart} <br />
            RETURN : {cityName.tripend}
          </div>
        </NAMES>
      }
      </div>
    );
}

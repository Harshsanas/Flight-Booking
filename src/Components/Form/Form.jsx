import React, { useState,useContext } from 'react'
import {FlightContext} from "../Flight/FlightContextProvider"
import styled from "styled-components"

const INPUTFORM = styled.div`
  width: 25%;
  border: 1px solid black;
  position: fixed;

  input {
    margin-top: 20px;
    width: 81%;
    height: 20px;
    border-radius: 4px;
    border: 1px solid grey;
    margin-left: 20px;
    padding: 5px;
    cursor: pointer;
  }
  select {
    border-radius: 4px;
    border: 1px solid grey;
    margin-top: 20px;
    width: 84%;
    height: 35px;
    margin-left: 20px;
    padding: 5px;
  }
  button {
    width: 100px;
    font-weight: 500;
    border-radius: 8px;
    border: 1px solid grey;
    cursor: pointer;
    height: 35px;
    padding: 5px;
    margin: 20px 0 20px 20px;
  }

  button:hover {
    background-color: grey;
    color: white;
    font-weight: 500;
  }

  p {
    margin-top: 20px;
    margin-bottom: -20px;
    margin-left: 20px;
  }

  .slider {
    -webkit-appearance: none;
    width: 80%;
    height: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
  }
`;

export default function Form({setCityName}) {

  const { AddCity } = useContext(FlightContext);
  const [formData,setFormData] =useState("")

  const[range,setRange]=useState(0)

  const handleRange = (e)=>{
    console.log(e.target.value)
    setRange(e.target.value)
    
  }

  const handleChange=(e) => {
    const {name,value}=e.target;
    setFormData({...formData, [name]: value});
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(formData)
    var origincity = formData.origincity;
    var destinationcity= formData.destinationcity
    const city = [origincity,destinationcity];
    AddCity(city)
  };

  console.log(formData)
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <button
          style={{
            background: "none",
            border: "1px solid grey",
            cursor: "pointer",
          }}
        >
          SINGLE JOURNEY
        </button>
        <button
          style={{
            background: "none",
            border: "1px solid grey",
            cursor: "pointer",
          }}
        >
          RETURN JOURNEY
        </button>
        <INPUTFORM>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Origin City"
              onChange={handleChange}
              name="origincity"
            />
            <br />
            <input
              type="text"
              placeholder="Enter Destincation City"
              onChange={handleChange}
              name="destinationcity"
            />
            <p>DEPARTURE DATE</p>
            <input
              type="date"
              id="start"
              name="tripstart"
              min="2021-08-28"
              max="2025-12-31"
              onChange={handleChange}
            />
            <p>RETURN DATE</p>
            <input
              type="date"
              id="start"
              name="tripend"
              min="2021-08-28"
              onChange={handleChange}
              max="2025-12-31"
            />

            <p>PASSENGER</p>
            <select onChange={handleChange} name="passenger">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <br />
            <button type="submit">Search</button>
          </form>
          <hr />
          <p>Refine Flight Search</p>
          <p style={{ float: "left" }}>Rs. 0</p>{" "}
          <p style={{ float: "right", marginRight: "12%" }}>Rs. 20000</p>
          <input type="range" min="0" max="20000" class="slider" id="myRange" onChange={handleRange} value={range}/>
        </INPUTFORM>
      </div>
    </div>
  );
}

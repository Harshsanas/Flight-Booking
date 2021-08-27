import React, { useState } from 'react'
import styled from "styled-components"

const INPUTFORM = styled.div`
  margin-top: 50px;
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
    margin:20px 0 20px 20px;
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
`;

export default function Form({ handleChange,handleSubmit }) {

  const details ={ 
    origincity:"",
    destinationcity:"",
    departdate:"",
    returndate:"",
    passenger:"",
  }

  return (
    <div>
      <INPUTFORM>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Origin City"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Destincation City"
            onChange={handleChange}
          />
          <p>DEPARTURE DATE</p>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2021-08-27"
            max="2025-12-31"
            onChange={handleChange}
          />
          <p>RETURN DATE</p>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2021-08-27"
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
      </INPUTFORM>
    </div>
  );
}

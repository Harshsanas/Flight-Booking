import React from 'react'
import styled from "styled-components"

const NAVBAR = styled.div`
  position: fixed;
  background-color: white;
  text-align: center;
  margin-top: -20px;
  padding-top: 10px;
  padding-bottom: 15px;
  box-shadow: 0 0 1px 1px grey;
  width: 100%;
`;


export default function Navbar() {
    return (
      <div>
        <NAVBAR>
          <h1>NAUSTEK FLIGHT BOOKING</h1>
        </NAVBAR>
      </div>
    );
}

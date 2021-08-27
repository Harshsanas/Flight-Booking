import React from 'react'
import Flight from '../Flight/Flight'
import Form from "../Form/Form"
import Navbar from '../NavBar/Navbar'
import styled from "styled-components"

const FORMDATA=styled.div`
width: 80%;
display: grid;
margin: 20px auto;
grid-template-columns: 40% 60%;
justify-content: space-evenly;

>div{
  margin: 0 auto 0 10px;
}
`
export default function Home() {
    return (
      <div>
        <Navbar />
        <FORMDATA>
          <div>
            <Form />
          </div>
          <div>
            <Flight />
          </div>
        </FORMDATA>
      </div>
    );
}

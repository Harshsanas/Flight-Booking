import React from "react";
import styled from "styled-components"


const FLIGHT = styled.div`
  > div {
    margin-top: 50px;
  }

  button {
    margin: auto;
    width: 150px;
    height: 30px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid grey;
    font-weight: 500;
  }

  button:hover {
    background-color: grey;
    color: white;
  }

  img {
    height: 150px;
    width: 150px;
    border-radius: 8px;
  }

  > div {
    display: flex;
    border: 1px solid grey;
    padding: 20px;
    border-radius: 8px;
  }

  > div:hover {
    box-shadow: 0 0 5px 2px grey;
  }
`;


function Product({ e }) {
  
  return (
    <>
      <FLIGHT>
        <div>
          <div className="left">
            <h1>Rs. {e.price}</h1>
            <div style={{ display: "flex", marginTop: "40px" }}>
              <div>
                <p>{e.flightno}</p>
                <p>
                  {e.city1} &#62; {e.city2}
                </p>
                <p>Depart : {e.depart_time}</p>
                <p>Arrive : {e.arrive_time}</p>
              </div>
              <div style={{ marginLeft: "30px" }}>
                <p>{e.return_flight}</p>
                <p>
                  {e.city2} &#62; {e.city1}
                </p>
                <p>Depart : {e.return_depart_time}</p>
                <p>Arrive : {e.return_arrive_time}</p>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "80px" }}>
            <img src={e.image} alt="" />
            <br />
            <button>BOOK THIS FLIGHT</button>
          </div>
        </div>
      </FLIGHT>
    </>
  );
}

export default Product;

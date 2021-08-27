// import React from "react";
// import { FlightContext } from "./FlightContextProvider";
// import { useContext } from "react";

// function FlightDetails() {
//   const { flight } = useContext(FlightContext);
//   console.log(flight);

//   return (
//     <div>
//       <h1>FLIGHT DETAILS</h1>
//       <table>
//         <thead>
//           <tr>
//             <th colSpan={3}>Invoice</th>
//           </tr>
//           <th>Item Name</th>
//           <th>Quantity</th>
//           <th>Price(in Rs.)</th>
//           <th>Final Price</th>
//         </thead>
//         <tbody>
//           {flight.map((el) => (
//             <tr key={el.id}>
//               <td>{el.product_name}</td>
//               <td>{el.counter}</td>
//               <td>{el.price}</td>
//               <td>{el.price * el.counter}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default FlightDetails;

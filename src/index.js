import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// model: "Honda Civic",
// //The top colour refers to the first item in the array below:
// //i.e. hondaTopColour = "black"
// coloursByPopularity: ["black", "silver"],
// speedStats: {
//   topSpeed: 140,
//   zeroToSixty: 8.5
// }

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed : hondaTopSpeed }
} = honda;

const {
  speedStats: { topSpeed : teslaTopSpeed }
} = tesla;

const {coloursByPopularity : [hondaTopColour,]} = honda;
const {coloursByPopularity : [teslaTopColour,]} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);



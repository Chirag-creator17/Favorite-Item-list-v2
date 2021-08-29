import React from "react";
import { Table, thread, th, tr, tbody, td } from "react-bootstrap";

const Home = () => (
  <div>
    <h1 style={{ paddingTop: 65 }}>Home Page</h1>
    {/* <h1 ClassName="headers">Home Page</h1> */}
    <br/>
    <h2><u>Top 5 favourite Friuts and Vegetables</u></h2>
    <br/>
    <Table responsive borderless="true" size="sm" className="tables">
      <thead>
        <tr>
          <th></th>
          <th>Fruits</th>
          <th>Vegetables</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Banana</td>
          <td>Potatoes</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Apples</td>
          <td>Tomatoes</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Strawberries</td>
          <td>Onions</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Grapes</td>
          <td>Carrots</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Oranges</td>
          <td>Lettuce </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default Home;

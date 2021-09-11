import React from "react";
import { ListGroup } from "react-bootstrap";
const friuts = ["Apple", "Banana", "Strawberries", "Mango", "Grapes"];
const vegetables = ["Potato", "Tomato", "Onion", "Carrot", "Cabbage"];
const Home = () => (
  <div>
    <h1 className="head">Home Page</h1>
    <ListGroup variant="flush" className="list">
      <h3>Top 5 favorite fruits</h3>
      <ul>
        {friuts.map((friut, index) => (
          <li key={index}>{friut}</li>
        ))}
      </ul>
      <h3>Top 5 favorite vegetables</h3>
      <ul>
        {vegetables.map((vegetable, index) => (
          <li key={index}>{vegetable}</li>
        ))}
      </ul>
    </ListGroup>
  </div>
);

export default Home;

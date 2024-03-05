import axios from "axios";
import { response } from "express";
import { useEffect, useState } from "react";
import PizzaOption from "./PizzaOption";
import { Row } from "react-bootstrap";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  }, [optionType]);

  const optionItems = items.map((item) => (
    <PizzaOption key={item.id} type={item.type} image={item.image} />
  ));

  return <Row>{optionItems}</Row>;
}

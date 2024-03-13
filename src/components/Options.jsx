import axios from "axios";
import { response } from "express";
import { useEffect, useState } from "react";
import PizzaOption from "./PizzaOption";
import { Row } from "react-bootstrap";
import { useOrderDetails } from "../contexts/OrderDetails";
import { formatCurrency } from "../utilities/utilities";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const { totals } = useOrderDetails();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  }, [optionType]);

  const optionItems = items.map((item) => (
    <PizzaOption key={item.id} type={item.type} image={item.image} />
  ));
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  return (
    <>
      <h2>{title}</h2>
      <p>total: {formatCurrency(totals[optionType])}</p>
      <Row>{optionItems}</Row>
    </>
  );
}

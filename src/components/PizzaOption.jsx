import { Col, Form, Row } from "react-bootstrap";
import { useOrderDetails } from "../contexts/OrderDetails";

export default function PizzaOption({ id, type, image }) {
  const { updateItemCount } = useOrderDetails();

  const handleChange = (e) => {
    updateItemCount(type, e.target.value, "pizzas");
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3000/${image}`}
        alt={`${type} pizza`}
      />
      <Form.Group
        controlId={`${type}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      />
      <Form.Label column xs="6" style={{ textAlign: "right" }}>
        {type}
      </Form.Label>
      <Col xs="5" style={{ textAlign: "left" }}>
        {/* <input
          type="text"
          name="pizzaSize"
          id="pizzaSize"
          placeholder={type}
          onChange={handleChange}
        /> */}
        <Form.Control
          type="text"
          defaultValue={"choose size"}
          onChange={handleChange}
          placeholder={type}
        />
      </Col>
    </Col>
  );
}

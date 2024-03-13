import "./App.css";
import Options from "./components/Options";
import { Container } from "react-bootstrap";
import OrderEntry from "./components/OrderEntry";
import { OrdersDetailsProvider } from "./contexts/OrderDetails";

function App() {
  return (
    <Container>
      <OrdersDetailsProvider>
        <OrderEntry />
      </OrdersDetailsProvider>
    </Container>
  );
}

export default App;

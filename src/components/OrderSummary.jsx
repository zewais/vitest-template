import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../contexts/OrderDetails";
import { formatCurrency } from "../utilities/utilities";
import { pizzaOptions } from "../../data/pizzasOptions";

export default function OrderSummary() {
  const { totals, optionCounts } = useOrderDetails();

  const pizzaArray = Object.entries(optionCounts.pizzas); //the output should look like [["cheese", "small"], ["pepperoni", "small"]]
  const pizzaList = pizzaArray.map(([key, value]) => {
    <li key={key}>
      {key}: {value} -
      {pizzaOptions.find((pizza) => pizza.type === key).price[value]}
    </li>;
  });

  return (
    <div>
      <h1>OrderSummary</h1>
      <h2>Pizzas: {formatCurrency(totals.pizzas)}</h2>
      <ul>{pizzaList}</ul>
      <SummaryForm />
    </div>
  );
}

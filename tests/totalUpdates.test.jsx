// import { render, screen } from "@testing-library/react";
import { render, screen } from "../src/utilities/testing-library-utilities";
import userEvent from "@testing-library/user-event";
import Options from "../src/components/Options";
import PizzaOption from "../src/components/PizzaOption";
import { expect } from "vitest";
import { OrdersDetailsProvider } from "../src/contexts/OrderDetails";

test("update subtotal for pizza choices", async () => {
  const user = userEvent.setup();
  render(<Options optionType="pizzas" />); //OPTIONS IS NOT WRAPPED IN A CONTEXT!!

  //make sure subtotal starts at $0.00
  const pizzaSubtotal = screen.getByText("Pizzas total: $", { exact: false });

  expect(pizzaSubtotal).toHaveTextContent("0.00");

  //update cheese pizza to a small pizza, and check the subtotal
  const cheeseInput = await screen.findByPlaceholderText(/cheese/i, {
    name: /cheese/i,
  });
  await user.clear(cheeseInput);
  await user.type(cheeseInput, "small");
  expect(pizzaSubtotal).toHaveTextContent("$10.95");

  //update pepperoni pizza to a small pizza, and check the subtotal
  const pepperoniInput = await screen.findByPlaceholderText(/pepperoni/i, {
    name: /pepperoni/i,
  });
  await user.clear(pepperoniInput);
  await user.type(pepperoniInput, "small");
  expect(pizzaSubtotal).toHaveTextContent("$24.90");
});

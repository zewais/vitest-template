import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../src/components/Options";
import PizzaOption from "../src/components/PizzaOption";
import { expect } from "vitest";

test("update subtotal for pizza choices", async () => {
  const user = userEvent.setup();
  render(<Options optionType={PizzaOption} />);

  //make sure subtotal starts at $0.00
  const pizzaSubtotal = screen.getByText("Pizza total: $", { exact: false });

  expect(pizzaSubtotal).toHaveTextContent("0.00");

  //update cheese pizza to a small pizza, and check the subtotal
  const cheeseInput = await screen.findByRole("spinbutton", {
    name: /cheese/i,
  });
  await user.clear(cheeseInput);
  await user.type(cheeseInput, "s");
  expect(pizzaSubtotal).toHaveTextContent("10.95");

  //update pepperoni pizza to a small pizza, and check the subtotal
  const pepperoniInput = await screen.findByRole("spinbutton", {
    name: /pepperoni/i,
  });
  await user.clear(pepperoniInput);
  await user.type(pepperoniInput, "s");
  expect(pizzaSubtotal).toHaveTextContent("24.90");
});

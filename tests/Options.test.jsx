// import { render, screen } from "@testing-library/react";
import { render, screen } from "../src/utilities/testing-library-utilities";
import Options from "../src/components/Options";
import { expect } from "vitest";

test("displays image for each pizza from the server", async () => {
  render(<Options optionType="pizzas" />);

  //find the images
  const pizzaImages = await screen.findAllByRole("img", { name: /pizza$/i });
  expect(pizzaImages).toHaveLength(2);

  //confirm the alt text of the images
  const altText = pizzaImages.map((element) => element.alt);
  expect(altText).toEqual(["cheese pizza", "pepperoni pizza"]);
});

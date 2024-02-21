import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../src/components/SummaryForm";
import { expect } from "vitest";
//import userEvent
import userEvent from "@testing-library/user-event";

test("terms and conditions checkbox enable and disable confirm order button", async () => {
  //create a user instance
  const user = userEvent.setup();
  //render component
  render(<SummaryForm />);
  //capture elements from screen
  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  const termsAndConditionsCheckbox = screen.getByRole("checkbox", {
    id: /terms/i,
  });
  //expect button disabled and checkbox unchecked by default
  expect(confirmOrderButton).toBeDisabled();
  expect(termsAndConditionsCheckbox).not.toBeChecked();

  //click on checkbox and expect button to be enabled
  //   fireEvent.click(termsAndConditionsCheckbox);
  await user.click(termsAndConditionsCheckbox);
  expect(termsAndConditionsCheckbox).toBeChecked();
  expect(confirmOrderButton).toBeEnabled();

  //uncheck the checkbox and expect button to be disabled again
  //   fireEvent.click(termsAndConditionsCheckbox);
  await user.click(termsAndConditionsCheckbox);
  expect(termsAndConditionsCheckbox).not.toBeChecked();
  expect(confirmOrderButton).toBeDisabled();
});

test("popover responds to user hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const termsAndConditionsOverlay = screen.getByText(/terms and conditions/i);
  //popover is hidden - not in document
  const nullPopover = screen.queryByText(/this website/i);
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears in document when user hovers over
  await user.hover(termsAndConditionsOverlay);
  const popover = screen.getByText(/this website/i);
  expect(popover).toBeInTheDocument();

  //popover disappears when user unhovers
  await user.unhover(termsAndConditionsOverlay);
  expect(popover).not.toBeInTheDocument();
});

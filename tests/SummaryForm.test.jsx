import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../src/components/SummaryForm";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

test("terms and conditions checkbox enables the confirm order button", async () => {
  const user = userEvent.setup();
  //render component
  render(<SummaryForm />);
  //grab checkbox and button off the screen
  const termsAndConditionsCheckbox = screen.getByRole("checkbox", {
    id: /terms/i,
  });
  const confirmOrderButton = screen.getByRole("button", { name: /confirm/i });
  //expect the checkbox to be unchecked and button to disabled
  expect(termsAndConditionsCheckbox).not.toBeChecked();
  expect(confirmOrderButton).toBeDisabled();
  //click on checkbox
  await user.click(termsAndConditionsCheckbox);

  //expect the checkbox to be checked and button to be enabled
  expect(termsAndConditionsCheckbox).toBeChecked();
  expect(confirmOrderButton).toBeEnabled();

  //click on checkbox
  await user.click(termsAndConditionsCheckbox);

  //expect the checkbox to be unchecked and button to be disabled
  expect(termsAndConditionsCheckbox).not.toBeChecked();
  expect(confirmOrderButton).toBeDisabled();
});

test("popover responds to user hovering", async () => {
  //setup a userEvent
  const user = userEvent.setup();
  //render the component
  render(<SummaryForm />);
  //grab a non-existing popover from the screen
  const nullPopover = screen.queryByText(/this website/i);
  const termsAndConditionsOverlay = screen.getByText(/terms and conditions/i);
  //expect that this dummy popover is not in the document
  expect(nullPopover).not.toBeInTheDocument();
  //user hovers over the terms and conditions link to create popover and make it appear
  await user.hover(termsAndConditionsOverlay);
  //expect the popover to be in the document
  const popover = screen.getByText(/this website/i);
  expect(popover).toBeInTheDocument();
  //user unhover away from the terms and conditions link to make the popover disappear
  await user.unhover(termsAndConditionsOverlay);
  //expect the popover is not in the document
  expect(popover).not.toBeInTheDocument();
});

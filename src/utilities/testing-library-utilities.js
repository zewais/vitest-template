import { render } from "@testing-library/react";
import { OrdersDetailsProvider } from "../contexts/OrderDetails";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrdersDetailsProvider, ...options });

//re-export everything
export * from "@testing-library/react";

//override render method
export { renderWithContext as render };

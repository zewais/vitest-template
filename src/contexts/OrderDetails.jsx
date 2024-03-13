import { createContext, useContext, useState } from "react";
import { pizzaOptions } from "../../data/pizzasOptions";

const OrderDetails = createContext();

//create a custon hook to check whether we're in a provider

export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);

  if (!contextValue) {
    throw new Error(
      "useOrderDetails must be called within an OrdersDetailsProvider"
    );
  }
  return contextValue;
}

export function OrdersDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    pizzas: {}, //example: {cheese: "s", white: "m"}
    extraToppings: {}, //example: {extraSauce: true, extraCheese: false, extraPepperoni: true}
  });

  function updateItemCount(itemName, newItemCount, optionType) {
    //copy optionCounts
    const newOptionCounts = { ...optionCounts };

    //update the copy with new information
    newOptionCounts[optionType][itemName] = newItemCount;

    //update the state
    setOptionCounts(newOptionCounts);
  }

  function resetOrder() {
    setOptionCounts({ pizzas: {}, extraToppings: {} });
  }

  //utility function to get the total price of pizzas or extra toppings depending on the argument
  function calculateTotal(optionType) {
    //get an array of counts, pizza example ["small", "medium"]. extraToppings example: [true, false, true]
    const ordersArray = optionCounts[optionType];
    const totalReducer = Object.entries(ordersArray).reduce(
      (total, [type, size]) => {
        const pizzaFind = pizzaOptions.find((pizza) => pizza.type === type);
        return total + pizzaFind.price[size];
      },
      0
    );
    return totalReducer;
  }
  //calculate the total of pizza orders by using reduce method
  const totals = {
    pizzas: calculateTotal("pizzas"),
    extraToppings: calculateTotal("extraToppings"),
  };
  //bundle the avaiable getters and setters for the provider in on object
  const value = { optionCounts, totals, updateItemCount, resetOrder };
  return <OrderDetails.Provider value={value} {...props} />;
}

import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/pizzas", () => {
    return HttpResponse.json([
      {
        id: "1",
        type: "cheese",
        toppings: ["tomato sauce", "mozzeralla cheese"],
        price: {
          small: 10.95,
          medium: 13.95,
          large: 16.95,
        },
        image: "/images/cheesePizza.webp",
      },
      {
        id: "2",
        type: "pepperoni",
        toppings: ["pepperoni", "tomato sauce", "mozzeralla cheese"],
        price: {
          small: 13.95,
          medium: 16.95,
          large: 19.95,
        },
        image: "/images/pepperoniPizza.webp",
      },
    ]);
  }),
];

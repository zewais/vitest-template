const pizzaOptions = [
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
  {
    id: "3",
    type: "white",
    toppings: [
      "garlic olive oil",
      "ricotta cheese",
      "mozzarella",
      "spinach",
      "tomatoes",
    ],
    price: {
      small: 12.95,
      medium: 14.95,
      large: 17.95,
    },
    image: "/images/whitePizza.webp",
  },
  {
    id: "4",
    type: "vegetarian",
    toppings: [
      "tomato sauce",
      "mozzarella cheese",
      "red onions",
      "bell peppers",
      "black olives",
    ],
    price: {
      small: 12.95,
      medium: 14.95,
      large: 17.95,
    },
    image: "/images/vegetarianPizza.webp",
  },
];

const extraToppings = [
  {
    id: "ex1",
    type: "extra cheese",
    price: 1.95,
  },
  {
    id: "ex2",
    type: "extra vegies",
    price: 2.95,
  },
  {
    id: "ex3",
    type: "extra sauce",
    price: 0.95,
  },
];

module.exports = { pizzaOptions, extraToppings };

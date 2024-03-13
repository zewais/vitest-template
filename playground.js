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

const pizzas = {
  cheese: "small",
  pepperoni: "medium",
};

orderPizzas = Object.keys(pizzas);
const orderSizes = Object.values(pizzas);
console.log(orderSizes);
let total = 0;
for (let i = 0; i < orderSizes.length; i++) {
  let pizzaFind = pizzaOptions.find((pizza) => pizza.type === orderPizzas[i]);
  total += pizzaFind.price[orderSizes[i]];
}
console.log(total);

const totalReducer = Object.entries(pizzas).reduce((total, [type, size]) => {
  const pizzaFind = pizzaOptions.find((pizza) => pizza.type === type);
  return total + pizzaFind.price[size];
}, 0);

console.log(totalReducer);

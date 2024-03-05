const express = require("express");
const cors = require("cors");
const { request, response } = require("http");
const port = 3000;
const app = express();
const { pizzaOptions, extraToppings } = require("../data/pizzasOptions.js");

app.use(cors());

//routes
app.get("/pizzas", (request, response) => {
  response.send(pizzaOptions);
});

app.get("/extraToppings", (request, response) => {
  response.send(extraToppings);
});

app.post("/order", (request, response) => {
  const { pizzaOrder } = request.body;
});

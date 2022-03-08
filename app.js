const express = require("express");
const app = express();
const morgan = require("morgan");

const menuCard = [
  { id: 1, name: "Pizza", price: 10 },
  { id: 2, name: "Burger", price: 15 },
  { id: 3, name: "Coke", price: 5 },
  { id: 4, name: "Fries", price: 7 },
  { id: 5, name: "Ice Cream", price: 8 },
  { id: 6, name: "Cake", price: 12 },
  { id: 7, name: "Coffee", price: 6 },
  { id: 8, name: "Tea", price: 4 },
  { id: 9, name: "Sandwich", price: 13 },
  { id: 10, name: "Noodles", price: 9 },
];

app.get("/", (req, res) => {
  res.send("Welcome to Bangla Chinese Akif");
});

app.get("/dishes", (req, res) => {
  res.send(menuCard);
});
app.get("/dishes/:id", (req, res) => {
  const dish = menuCard.find((d) => d.id === parseInt(req.params.id));
  if (dish) {
    res.send(dish);
  } else {
    // console.log(dish);
    res.status(404).send("Dish not found");
  }
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to PORT : ${PORT}`));

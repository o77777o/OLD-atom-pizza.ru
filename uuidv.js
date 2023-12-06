const pizzas = require("./pizzas");
const { uuid } = require("uuidv4");

for (let i = 0; i < pizzas.length; i++) {
  pizzas[i].ID = uuid();
}

console.log(pizzas);

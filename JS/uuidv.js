// const pizzas = require("./pizzas");
// const { uuid } = require("uuidv4");

// for (let i = 0; i < pizzas.length; i++) {
//     console.log(uuid())
// }

const sortedPizzas = pizzas.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);
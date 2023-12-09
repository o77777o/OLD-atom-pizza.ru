const pizzaContainer = document.querySelector(".section");

for (let i = 0; i < pizzas.length; i++) {
  const ProductCard = document.createElement("div");
  ProductCard.classList.add("product_card");
  ProductCard.id = pizzas[i].ID;

  ProductCard.innerHTML = 
  `<div class="img_product" id="${pizzas[i].ID}">
  <img
  src="${pizzas[i].photo}"
  alt=""/>
  </div>
  <div class="description_product">
  <div class="structure_product">${pizzas[i].name}, <br> ${pizzas[i].base}</div>
  <div class="weight_product">${pizzas[i].weight} грамм, ⌀ ${pizzas[i].diameter} </div>
  <div class="price_product">${pizzas[i].price}₽</div>
  </div>`;

  pizzaContainer.appendChild(ProductCard);
}

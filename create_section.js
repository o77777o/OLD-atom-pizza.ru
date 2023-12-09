const pizzaContainer = document.querySelector(".section");

for (let i = 0; i < pizzas.length; i++) {
  const ProductCart = document.createElement("div");
  ProductCart.classList.add("product");

  ProductCart.innerHTML = 
  `<div class="img_product" id="${pizzas[i].ID}">
  <img
  src="${pizzas[i].photo}"
  alt=""/>
  </div>
  <div class="description_product">
  <div class="structure_product">${pizzas[i].name}</div>
  <div class="weight_product">${pizzas[i].weight} грамм, ⌀ ${pizzas[i].diameter} </div>
  <div class="price_product">${pizzas[i].price} ₽</div>
  </div>`;

  pizzaContainer.appendChild(ProductCart);
}

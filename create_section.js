const pizza_container = document.querySelector(".section");

for (let i = 0; i < menu_position.length; i++) {
  const product_card = document.createElement("div");
  product_card.classList.add("product_card");
  product_card.id = menu_position[i].ID;

  product_card.innerHTML = 
  `<div class="img_product" id="${menu_position[i].ID}">
  <img
  src="${menu_position[i].photo}"
  alt=""/>
  </div>
  <div class="description_product">
  <div class="structure_product">${menu_position[i].name}, <br> ${menu_position[i].base}</div>
  <div class="weight_product">${menu_position[i].weight} грамм, ⌀ ${menu_position[i].diameter} </div>
  <div class="price_product">${menu_position[i].price}₽</div>
  </div>`;

  pizza_container.appendChild(product_card);
}

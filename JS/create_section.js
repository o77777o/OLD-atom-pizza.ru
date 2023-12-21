const PizzaContainer = document.querySelector(".section");

for (let i = 0; i < menuPosition.length; i++) {
  const productCard = document.createElement("div");
  productCard.classList.add("product_card");
  productCard.id = menuPosition[i].ID;

  productCard.innerHTML = 
  `<div class="img_product">
  <img
  src="${menuPosition[i].photo}"
  alt=""/>
  </div>
  <div class="description_product">
  <div class="structure_product">${menuPosition[i].name}, <br> ${menuPosition[i].base}</div>
  <div class="weight_product">${menuPosition[i].weight} грамм, ⌀ ${menuPosition[i].diameter} </div>
  <div class="price_product_card">${menuPosition[i].price}₽</div>
  </div>`;

  PizzaContainer.appendChild(productCard);
}

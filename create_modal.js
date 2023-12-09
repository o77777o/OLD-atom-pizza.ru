const modalContainer = document.querySelector(".modal_menu");

for (let i = 0; i < pizzas.length; i++) {
  const ModalCard = document.createElement("div");
  ModalCard.classList.add("modal_card");
  ModalCard.id = pizzas[i].ID;

  ModalCard.innerHTML = `<div class="img_modal_card">
    <img src="${pizzas[i].photo}" alt="" />
  </div>
  <div class="description_modal_card">
    <div class="structure_modal_card">${pizzas[i].name}, <br> ${pizzas[i].base} </div>
    <div class="weight_modal_card">${pizzas[i].weight} грамм, ⌀ ${pizzas[i].diameter}</div>
    <div class="compound_modal_card">${pizzas[i].ingredients}</div>
    <div class="price_modal_card">${pizzas[i].price}₽</div>
  </div>`;

  modalContainer.appendChild(ModalCard);
}



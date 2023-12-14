const modal_menu = document.querySelector(".modal_menu");

for (let i = 0; i < menu_position.length; i++) {
  const modal_card = document.createElement("div");
  modal_card.classList.add("modal_card");
  modal_card.id = menu_position[i].ID;

  modal_card.innerHTML = `<div class="img_modal_card">
    <img src="${menu_position[i].photo}" alt="" />
  </div>
  <div class="description_modal_card">
    <div class="structure_modal_card">${menu_position[i].name}, <br> ${menu_position[i].base} </div>
    <div class="weight_modal_card">${menu_position[i].weight} грамм, ⌀ ${menu_position[i].diameter}</div>
    <div class="compound_modal_card">${menu_position[i].ingredients}</div>
    <div class="price_modal_card">${menu_position[i].price}₽</div>
  </div>`;

  modal_menu.appendChild(modal_card);
}



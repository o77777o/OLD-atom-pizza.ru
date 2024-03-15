const createSiteMenu = (menuArray) => {
  const menuContainer = document.querySelector(".menu");
  const fragment = document.createDocumentFragment();

  // Группируем элементы меню по типу
  const groupedMenu = {};
  menuArray.forEach((item) => {
    if (!groupedMenu[item.type]) {
      groupedMenu[item.type] = [];
    }
    groupedMenu[item.type].push(item);
  });

  // Создаем HTML для каждой группы элементов меню и добавляем их во фрагмент
  Object.entries(groupedMenu).forEach(([type, items]) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = type;
    titleDiv.id = type;
    fragment.appendChild(titleDiv);

    // const hr = document.createElement("hr");
    // fragment.appendChild(hr);

    items.forEach((item) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product_card");
      productCard.id = item.ID;

      const cardHTML = `
        <div class="img_product">
          <img src="${item.photo}" alt="" title="Настроить"/>
        </div>
        <div class="description_product">
          <div class="structure_product">${item.name}${type === "Пицца" ? `, <br> ${item.base}` : ""}</div>
          <div class="weight_product">${item.weight} грамм${type === "Пицца" ? `, ⌀ ${item.diameter}` : ""}</div>
          <div class="button_price_product_card">${item.price} ₽</div>
        </div>`;
      
      productCard.innerHTML = cardHTML;
      sectionDiv.appendChild(productCard);
    });

    fragment.appendChild(sectionDiv);
  });

  // Добавляем все элементы меню в контейнер одной операцией
  menuContainer.appendChild(fragment);
};



//Точка входа
const initProductCard = () => {
  createSiteMenu(menuPosition);
};

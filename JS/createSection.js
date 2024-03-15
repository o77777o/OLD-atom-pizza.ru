const createSiteMenu = (menuArray) => {
  const menuContainer = document.querySelector(".menu");

  const groupedMenu = menuArray.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  for (const type in groupedMenu) {
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = type;
    titleDiv.id = type;
    menuContainer.appendChild(titleDiv);

    const hr = document.createElement("hr");
    menuContainer.appendChild(hr);

    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section");
    groupedMenu[type].forEach((item) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product_card");
      productCard.id = item.ID;

      let cardHTML = "";

      if (type !== "Пицца") {
        cardHTML = `
          <div class="img_product">
            <img src="${item.photo}" alt="" title="Настроить"/>
          </div>
          <div class="description_product">
            <div class="structure_product">${item.name}</div>
            <div class="weight_product">${item.weight} грамм </div>
            <div class="button_price_product_card">${item.price} ₽</div>
          </div>`;
      } else {
        cardHTML = `
          <div class="img_product">
            <img src="${item.photo}" alt="" title="Настроить"/>
          </div>
          <div class="description_product">
            <div class="structure_product">${item.name}, <br> ${item.base}</div>
            <div class="weight_product">${item.weight} грамм, ⌀ ${item.diameter} </div>
            <div class="button_price_product_card">${item.price} ₽</div>
          </div>`;
      }

      productCard.innerHTML = cardHTML;
      sectionDiv.appendChild(productCard);
    });

    menuContainer.appendChild(sectionDiv);
  }
};

//Точка входа
const initProductCard = () => {
  createSiteMenu(menuPosition);
};

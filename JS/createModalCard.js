//Добавляем затемнение
const createModalBackground = (parentElement) => {
  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal_background");
  document.body.style.overflow = "hidden";
  makeSmoothAnimation(modalBackground);
  parentElement.appendChild(modalBackground);
};

//Плавная анимация появления
const makeSmoothAnimation = (elementHTML) => {
  elementHTML.style.opacity = 0; // устанавливаем начальную непрозрачность

  setTimeout(() => {
    elementHTML.style.transition = "0.2s";
    elementHTML.style.opacity = 1;
  }, 100);
};

//Функция добавления элемента по ID в корзину и сохранения в LS
const addToCart = (modalCard) => {
  const modalCardDescriptionHTML = modalCard.children[1];
  buttonPriceModalCardHTML = modalCardDescriptionHTML.children[5];
  buttonToCartHTML = modalCardDescriptionHTML.children[6];

  cardToCart(modalCard, buttonPriceModalCardHTML);
  addClick(buttonPriceModalCardHTML, displayButtonToCart, buttonToCartHTML);
};

//Проверка перед созданием окна
const checkSecondModal = () => {
  const parentHTML = document.querySelector(".modal_window");
  if (parentHTML.children.length) {
    parentHTML.innerHTML = "";
    document.body.style.overflow = "";
  }
};

//Активировать кнопку перехода в корзину из модальной карточки продукта
const activateButtonToCartFromModal = () => {
  const buttonToCartHTML = document.querySelector(".button_to_cart");
  addClick(buttonToCartHTML, displayCartModal);
  displayButtonToCart(buttonToCartHTML);
};

//Отобразить/спрятать кнопку перехода в корзину из модальной карточки продукта
const displayButtonToCart = (elementHTML) => {
  const array = getFromLS();
  if (array.length) {
    elementHTML.classList.remove("hide");
    elementHTML.classList.add("show");
  } else {
    elementHTML.classList.add("hide");
  }
};

//Создание меню настройки блюда
const createExtraItemsMenu = () => {
  const extraHTML = document.querySelector(".extra");
  for (let i = 0; extraItems.length > i; i++) {
    const extraItem = document.createElement("div");
    extraItem.classList.add("extra_item");
    extraItem.innerHTML = `

      <span>${extraItems[i].name}</span>
      <span> 
      <b>${extraItems[i].price}</b>
      <label class="toggle">
        <input type="checkbox" id="extraItem${i}">
        <div class="slider"></div>
      </label>
      </span>
      </div>

      `;
    extraHTML.appendChild(extraItem);
  }
};

//Получить объект допа
const getObjectExtraItem = (checkbox) => {
  const parentCheck = checkbox.parentNode;
  const firstlevel = parentCheck.parentNode;
  const secondLevel = firstlevel.parentNode;

  const extraItemPriceObject = firstlevel.children[0].textContent;
  const extraItemName = secondLevel.children[0].textContent;
  const extraItemPrice = parseInt(extraItemPriceObject);
  // ------------

  const extraItem = {
    name: extraItemName,
    price: extraItemPrice,
  };

  return extraItem;
};

//Сбросить настройку доп.опций элемента меню
const resetExtra = (menuElement) => {
  const menuItem = menuElement;
  menuItem.extra = [];
};

//Актуальная цена итема с допами
const calculateCurentItemPrice = (extraItem, extraItemCheckbox) => {
  const buttonPriceModalCardHTML = document.querySelector(
    ".button_price_modal_card"
  );
  const extraItemPrice = extraItem.price;
  const itemPrice = parseInt(buttonPriceModalCardHTML.innerText);

  if (extraItemCheckbox.checked) {
    buttonPriceModalCardHTML.innerHTML = `${itemPrice + extraItemPrice} ₽`;
  } else {
    buttonPriceModalCardHTML.innerHTML = `${itemPrice - extraItemPrice} ₽`;
  }
};

//активация чекбоксов, создание массива допов
const activateAllCheckboxes = (menuElement) => {
  resetExtra(menuElement);
  const extra = [];
  const menuItem = menuElement;

  const extraCheckboxes = document.querySelectorAll(
    '.extra_item input[type="checkbox"]'
  );

  for (let i = 0; i < extraCheckboxes.length; i++) {
    extraCheckboxes[i].addEventListener("change", () => {
      let extraItem = getObjectExtraItem(extraCheckboxes[i]);

      calculateCurentItemPrice(extraItem, extraCheckboxes[i]);

      if (extraCheckboxes[i].checked) {
        extra.push(extraItem);
        menuItem.extra = extra;
      } else {
        const extraItemIndex = extra.findIndex(
          (element) => element.name === extraItem.name
        );
        extra.splice(extraItemIndex, 1);
        menuItem.extra = extra;
      }
    });
  }
};

//Создание модального окна продукта
const createModalCard = (element) => {
  const modalCard = document.createElement("div");
  modalCard.classList.add("modal_card");
  modalCard.id = element.ID;

  modalCard.innerHTML = `
    <div class="img_modal_card">
      <img src="${element.photo}" alt="" />
    </div>
    <div class="description_modal_card">
      <div class="structure_modal_card">${element.name}, <br> ${element.base} </div>
      <div class="weight_modal_card">${element.weight} грамм, ⌀ ${element.diameter}</div>
      <div class="compound_modal_card">${element.ingredients}</div>
      <div class="structure_modal_card">Настроить</div>
      <div class="extra"></div>
      <div class="button_price_modal_card">${element.price} ₽</div>
      <div class="button_to_cart">Перейти в корзину</div>
    </div>
    `;
  makeSmoothAnimation(modalCard);
  return modalCard;
};

//Удаление затемнения и модального окна продукта по кнопке
const deleteModalCardButton = () => {
  const removeZone = document.querySelector(".modal_background");

  removeZone.addEventListener("click", () => {
    checkSecondModal();
  });
};

//Сброс допов у элемента
const resetElementExtraItems = (element) => {
  const removeZone = document.querySelector(".modal_background");
  removeZone.addEventListener("click", () => {
    element.extra = [];
  });
};

//Отображение по id модального окна
const openModal = (id) => {
  const element = findByID(id);
  const modalWindow = document.querySelector(".modal_window");
  const modalCard = createModalCard(element);

  checkSecondModal();
  createModalBackground(modalWindow);
  modalWindow.appendChild(modalCard);
  addToCart(modalCard);
  createExtraItemsMenu();
  activateAllCheckboxes(element);
  activateButtonToCartFromModal();
  resetElementExtraItems(element);
  deleteModalCardButton();
};

//Точка входа, навесить click на img в product_card
const initModal = () => {
  const productCardHTML = document.querySelectorAll(".product_card");

  for (const product of productCardHTML) {
    const buttonOpenModal = product.children[0];

    buttonOpenModal.addEventListener("click", () => {
      openModal(product.id);
    });
  }
};

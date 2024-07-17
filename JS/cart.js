//Ключ в Local Storage для Cart(LS)
const DB_NAME = "Cart";

//Создать пустое хранилище
const setEmptyStorage = () => {
  return localStorage.setItem(DB_NAME, JSON.stringify([]));
};

//Поиск объекта по ID
const findByID = (id) => {
  let element = menuPosition.find((item) => item.id === +id);

  if (!element) {
    alert("Ошибка");
    return;
  }
  return element;
};

//Проверка на Ключ
const createLS = () => {
  if (!localStorage.getItem(DB_NAME)) {
    setEmptyStorage();
  }
};

//Сохранение массива в LS
const saveToLS = (array) => {
  return localStorage.setItem(DB_NAME, JSON.stringify(array));
};

//Получение массива из LS
const getFromLS = () => {
  return JSON.parse(localStorage.getItem(DB_NAME));
};

//Сохранение элемента в LS
const saveElementToLS = (array, element) => {
  localStorage.setItem(DB_NAME, JSON.stringify([...array, element]));
};

//Очистка LS и Корзины
const clearAllCart = () => {
  setEmptyStorage();
  const totalProductHTML = document.querySelector(".total_product");
  totalProductHTML.innerHTML = "";
  showSum();
  checkRestaurantScheduleInCart();
  getArrayLength();
};

//Получение элемента и его сохранение в LS
const processButton = (id) => {
  const element = findByID(id);
  const all = getFromLS();
  saveElementToLS(all, element);
};

//Посчитать сумму чека
const showSum = () => {
  let sum = 0;

  const prices = document.querySelectorAll(".product_price");
  for (const priceHTML of prices) {
    const rawPrice = parseFloat(priceHTML.innerHTML);

    sum += rawPrice;
  }

  const totalCost = document.querySelector(".total_cost");
  totalCost.innerHTML = `Итого: ${sum} ₽`;
  return sum;
};

//Удаление элемента из массива
const deleteFromLS = (cartItem) => {
  let all = getFromLS();

  const elementToDelete = all.findIndex((element) => {
    return (
      element.id === cartItem.id &&
      element.extra.length === cartItem.extra.length &&
      element.extra.every((extraItem, index) => {
        return (
          extraItem.name === cartItem.extra[index].name &&
          extraItem.price === cartItem.extra[index].price
        );
      })
    );
  });
  if (elementToDelete !== -1) {
    all.splice(elementToDelete, 1);
    saveToLS(all);
  }
};

//Кнопка удаления товара из Cart, пересчет суммы, перезапись LS
const pushToDelete = (product, cartItem) => {
  const firstLevel = product.children[0];
  const deleteButton = firstLevel.children[2];
  deleteButton.addEventListener("click", () => {
    product.remove();
    deleteFromLS(cartItem);
    getArrayLength();
    showSum();
    checkRestaurantScheduleInCart();
  });
};

//Отрисковка допов для итема
const createElementExtraItems = (product, source) => {
  if (source.extra.length) {
    const productExtra = product.querySelector(".product_extra");
    for (let i = 0; i < source.extra.length; i++) {
      const productExtraItem = document.createElement("div");
      productExtraItem.classList.add("product_extra_item");
      productExtraItem.innerHTML = `
      - ${source.extra[i].name}
      
      `;
      productExtra.appendChild(productExtraItem);
    }
  }
};

//Посчитать сумму доп итемов
const calculateExtraItemPrice = (source) => {
  if (source.extra.length) {
    let totalExtraPrice = 0;
    for (let i = 0; i < source.extra.length; i++) {
      let extraPriceItem = source.extra[i].price;
      totalExtraPrice += extraPriceItem;
    }
    return totalExtraPrice;
  } else {
    return 0;
  }
};

//Отрисовка элемента в Cart
const createElement = (source) => {
  const cartItemPrice = source.price;
  const totalExtraItemPrice = calculateExtraItemPrice(source);
  const finalCartItemPrice = cartItemPrice + totalExtraItemPrice;
  const product = document.createElement("div");
  product.classList.add("product");
  product.id = source.id;
  product.innerHTML = `
  <div class="product_info">
    <div class="product_name">• ${source.type} «${source.name}»</div>
    <div class="product_price">${finalCartItemPrice} ₽</div>
    <div class="button_delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" stroke="white"/>
    <line x1="6" y1="6" x2="18" y2="18" stroke="white"/>
    </svg></div>
  </div>
  <div class="product_extra"></div>
  `;
  createElementExtraItems(product, source);
  return product;
};

//------------------------------------------------------------

//Отрисовка элементов в Cart из LS
const displayAllPositionInCart = () => {
  const all = getFromLS();
  const totalProduct = document.querySelector(".total_product");

  for (let i = 0; i < all.length; i++) {
    const product = createElement(all[i]);
    totalProduct.appendChild(product);
    pushToDelete(product, all[i]);
  }
  showSum();
};

//Добавление элемента в LS
const cardToCart = (product, element) => {
  element.addEventListener("click", () => {
    processButton(product.id);
    getArrayLength();
  });
};

//Очистка LS и Cart по кнопке
const pushButtonClearAll = () => {
  const buttonClearAllHTML = document.querySelector(".button_clear_all");
  addClick(buttonClearAllHTML, clearAllCart);
};

//Переход в зону доставки из корзины
const pushButtonToCheckAddress = () => {
  const buttonShortAddressHTML = document.querySelector(".short_address");
  addClick(buttonShortAddressHTML, saveUserDataOrderToLS);
  addClick(buttonShortAddressHTML, displayDeliveryModal);
};

//Отобразить сколько товаров в корзине
const getArrayLength = () => {
  const buttonOpenCart = document.querySelector(".button_open_cart");
  const countCartHTML = document.querySelector(".count_cart");
  const array = getFromLS();
  if (!array.length) {
    countCartHTML.innerHTML = "";
    buttonOpenCart.classList.remove("show");
    return;
  } else {
    buttonOpenCart.classList.add("show");
    countCartHTML.innerHTML = array.length;
  }
};

//Найти и навесить клики на кнопки карточек продукта
const activatePriceButton = () => {
  const productCardHTML = document.querySelectorAll(".product_card");

  for (const product of productCardHTML) {
    const description = product.children[1];
    const addToCartButton = description.children[2];
    cardToCart(product, addToCartButton);
  }
};

//Точка входа
const initCart = () => {
  createLS();
  getArrayLength();
  activatePriceButton();
};

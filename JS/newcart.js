//Ключ в Local Storage (LS)
const DB_NAME = "Cart";

//Создать пустое хранилище
const setEmptyStorage = () => {
  return localStorage.setItem(DB_NAME, JSON.stringify([]));
};

//Поиск объекта по ID

const findByID = (id) => {
  element = menuPosition.find((position) => position.ID === id);
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
  const elementToDelete = document.querySelectorAll(".product");
  elementToDelete.forEach((element) => {
    element.remove();
  });
  showSum();
  console.log("LS and Cart has been cleared");
};

//Получение элемента и его сохранение в LS
const processButton = (id) => {
  const element = findByID(id);
  console.log(element);
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
  totalCost.innerHTML = `Итого: ${sum}₽`;
};

//Кнопка удаления товара из корзины и пересчет суммы
const pushToDelete = (product) => {
  const deleteButton = product.children[2];
  deleteButton.addEventListener("click", () => {
    product.remove();
    showSum();
  });
};

//Отрисовка элемента в Cart
const createElement = (source) => {
  product = document.createElement("div");
  product.classList.add("product");
  product.id = source.ID;
  product.innerHTML = `
  
  <div class="product_name">${source.name}</div>
  <div class="product_price">${source.price}₽</div>
  <div class="delete_btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"/>
  <line x1="6" y1="6" x2="18" y2="18"/>
  </svg></div>
  `;
  return product;
};


//------------------------------------------------------------

//Получение элемента и его отрисовка в Cart
const displayElementInCart = (id) => {
  const element = findByID(id);
  const totalProduct = document.querySelector(".total_product");
  const product = createElement(element);
  totalProduct.appendChild(product);

  pushToDelete(product);
  showSum();
};

//Отрисовка элементов в Cart из LS после перезагрузки страницы

const displayAllCartAfterReboot = () => {
  const all = getFromLS();
  const totalProduct = document.querySelector(".total_product");

  for (let i = 0; i < all.length; i++) {
    const product = createElement(all[i]);
    totalProduct.appendChild(product);
    pushToDelete(product);
  }
  showSum();
};

//Добавление элемента в Cart и LS
const cardToCart = (product, element) => {
  element.addEventListener("click", () => {
    processButton(product.id);
    displayElementInCart(product.id);
  });
};

//Очистка LS и Cart по кнопке
const buttonClearAll = document.querySelector(".button_clear_all");
buttonClearAll.addEventListener("click", () => {
  clearAllCart();
});

//Точка входа
const init = () => {
  createLS();

  const products = document.querySelectorAll(".product_card");

  for (const product of products) {
    const description = product.children[1];
    const addToCartButton = description.children[2];
    cardToCart(product, addToCartButton);
  }

  displayAllCartAfterReboot();
};

window.onload = () => {
  init();
};

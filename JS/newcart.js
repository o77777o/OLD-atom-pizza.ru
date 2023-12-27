//Ключ в Local Storage (LS)
const DB_NAME = "Cart";

//Проверка на Ключ
const createLS = () => {
  if (!localStorage.getItem(DB_NAME)) {
    localStorage.setItem(DB_NAME, JSON.stringify([]));
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
  window.localStorage.setItem(DB_NAME, JSON.stringify([]));
  const elementToDelete = document.querySelectorAll(".product");
  elementToDelete.forEach((element) => {
    element.remove();
  });
  showSum()
  console.log("LS and Cart has been cleared");
};

//Получение элемента и его сохранение в LS
const processButton = (id) => {
  const element = menuPosition.find((position) => position.ID === id);
  if (!element) {
    alert("Ошибка");
    return;
  }
  const all = getFromLS();
  saveElementToLS(all, element);
};

//Общая сумма чека
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

//Получение элемента и его отрисовка в Cart
const displayElementInCart = (id) => {
  const element = menuPosition.find((position) => position.ID === id);
  if (!element) {
    alert("Ошибка");
    return;
  }
  const totalProduct = document.querySelector(".total_product");

  const product = document.createElement("div");
  product.classList.add("product");
  product.id = element.ID;
  product.innerHTML = `
  
  <div class="product_name">${element.name}</div>
  <div class="product_price">${element.price}₽</div>
  <div class="delete_btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"/>
  <line x1="6" y1="6" x2="18" y2="18"/>
  </svg></div>
  `;
  totalProduct.appendChild(product);

  const deleteButton = product.children[2];
  deleteButton.addEventListener("click", () => {
    product.remove();
    showSum()
  });

  showSum()
};

//Отрисовка элементов в Cart из LS после перезагрузки страницы

const displayAllCartAfterReboot = () => {
  const all = getFromLS();
  const totalProduct = document.querySelector(".total_product");

  for (let i = 0; i < all.length; i++) {
    const product = document.createElement("div");
    product.classList.add("product");
    product.id = all[i].ID;
    product.innerHTML = `

    <div class="product_name">${all[i].name}</div>
    <div class="product_price">${all[i].price}₽</div>
    <div class="delete_btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
    </svg></div>
    `;
    totalProduct.appendChild(product);

    const deleteButton = product.children[2];
    deleteButton.addEventListener("click", () => {
      product.remove();
      showSum()
    });
  }
  showSum()
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

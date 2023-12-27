const DB_NAME = "DataBase";

const clearAllCart = () => {
  window.localStorage.setItem(DB_NAME, JSON.stringify([]));
  const productToDelete = document.querySelectorAll(".product");
  productToDelete.forEach((element) => {
    element.remove();
  });
};

// Функция для удаления элемента из массива по его ID
const deleteByID = (array, id) => {
  return array.filter((item) => item.ID !== id);
};

// Функция для сохранения массива в localStorage
const saveToLS = (array) => {
  localStorage.setItem(DB_NAME, JSON.stringify(array));
};

// Функция для получения массива из localStorage
const getFromLS = () => {
  return JSON.parse(localStorage.getItem(DB_NAME)) || [];
};

// Функция для обновления списка элементов на странице после удаления
const updateProductList = (all) => {
  let totalProduct = document.querySelector(".total_product");
  totalProduct.innerHTML = ""; // Очищаем содержимое для обновления списка
  for (let i = 0; i < all.length; i++) {
    const productInCart = document.createElement("div");
    productInCart.classList.add("product");
    productInCart.id = all[i].ID;
    productInCart.innerHTML =
    `
    <div class="product_number">${i + 1}.</div>
    <div class="product_name">${all[i].name}</div>
    <div class="product_count">1 шт.</div>
    <div class="product_price">${all[i].price}₽</div>
    <div class="delete_btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </div>
    `
    ;
    totalProduct.appendChild(productInCart);
  };
};

// Функция для удаления элемента из массива в localStorage и обновления списка
const delButton = (id) => {
  let all = getFromLS(); // Получаем массив из localStorage
  console.log(all); // Выводим текущий массив (для отладки)
  all = deleteByID(all, id); // Удаляем элемент по ID
  saveToLS(all); // Сохраняем обновленный массив в localStorage
  console.log(all); // Выводим обновленный массив (для отладки)
  updateProductList(all); // Обновляем список элементов на странице
};

const initForCart = () => {
  const allProductFromCart = document.querySelectorAll(".product");

  for (const product of allProductFromCart) {
    const deleteButton = product.children[4];
    console.log(deleteButton);
    deleteButton.addEventListener("click", () => {
      delButton(product.id);
    });
  }
};

const getAllCart = () => {
  const all = JSON.parse(localStorage.getItem(DB_NAME));
  let totalProduct = document.querySelector(".total_product");
  for (let i = 0; i < all.length; i++) {
    const productInCart = document.createElement("div");
    productInCart.classList.add("product");
    productInCart.id = all[i].ID;
    productInCart.innerHTML = `
    <div class="product_number">${i + 1}.</div>
    <div class="product_name">${all[i].name}</div>
    <div class="product_count">1 шт.</div>
    <div class="product_price">${all[i].price}₽</div>
    <div class="delete_btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg></div>
    `;
    totalProduct.appendChild(productInCart);
  }
};

const processButton = (id) => {
  const element = menuPosition.find((position) => position.ID === id);
  if (!element) {
    alert("Ты куда жмал бля");
    return;
  }
  const all = JSON.parse(localStorage.getItem(DB_NAME));
  localStorage.setItem(DB_NAME, JSON.stringify([...all, element]));
};
//------------
const displayProduct = (id) => {
  const element = menuPosition.find((position) => position.ID === id);

  if (!element) {
    alert("Ты куда жмал бля");
    return;
  }
  let all = JSON.parse(localStorage.getItem(DB_NAME));
  let totalProduct = document.querySelector(".total_product");
  const productInCart = document.createElement("div");
  productInCart.classList.add("product");
  productInCart.id = element.ID;
  productInCart.innerHTML = `
  <div class="product_number">${all.length}.</div>
  <div class="product_name">${element.name}</div>
  <div class="product_count"> 1 шт.</div>
  <div class="product_price">${element.price}₽</div>
  <div class="delete_btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"/>
  <line x1="6" y1="6" x2="18" y2="18"/>
</svg></div>
  `;
  totalProduct.appendChild(productInCart);
};

const cardToCart = (product, element) => {
  element.addEventListener("click", () => {
    processButton(product.id);
    displayProduct(product.id);
  });
};

const init = () => {
  if (!localStorage.getItem(DB_NAME)) {
    localStorage.setItem(DB_NAME, JSON.stringify([]));
  }
  const products = document.querySelectorAll(".product_card");

  for (const product of products) {
    const description = product.children[1];
    const addToCartButton = description.children[2];
    cardToCart(product, addToCartButton);
  }
};

document.querySelector(".button_clear_all").addEventListener("click", () => {
  clearAllCart();
});

window.onload = () => {
  getAllCart();
  init();
  initForCart();
};

let selectedProduct = "";
let productNumber = 0;

const DB_NAME = "DataBase";
if (!localStorage.getItem(DB_NAME)) {
  localStorage.setItem(DB_NAME, JSON.stringify([]));
}
let cart = JSON.parse(localStorage.getItem(DB_NAME));

const allButtons = document.querySelectorAll(
  ".price_product_card, .price_modal_card"
);
const totalProduct = document.querySelector(".total_product");
//----------------------------------------------

const getCartFromLS = (i) => {
  productNumber += 1;

  const productInCart = document.createElement("div");
  productInCart.classList.add("product");
  productInCart.innerHTML = `
    <div class="product_number">${productNumber}.</div>
    <div class="product_name">${cart[i].name}</div>
    <div class="product_count">3 шт.</div>
    <div class="product_price">${cart[i].price}₽</div>
    `;
  totalProduct.appendChild(productInCart);
};

const displayProductToCart = (i) => {
  productNumber += 1;
  const correctIndex = i % menuPosition.length;
  const productInCart = document.createElement("div");
  productInCart.classList.add("product");
  productInCart.innerHTML = `
    <div class="product_number">${productNumber}.</div>
    <div class="product_name">${menuPosition[correctIndex].name}</div>
    <div class="product_count">3 шт.</div>
    <div class="product_price">${menuPosition[correctIndex].price}₽</div>
    `;
  totalProduct.appendChild(productInCart);
};

const saveProductToLS = (i) => {
  const correctIndex = i % menuPosition.length;
  selectedProduct = menuPosition[correctIndex];

  cart = JSON.parse(localStorage.getItem(DB_NAME));
  if (!localStorage.getItem(DB_NAME)) {
    localStorage.setItem(DB_NAME, JSON.stringify([]));
  }
  cart.push(selectedProduct);
  localStorage.setItem(DB_NAME, JSON.stringify(cart));
};

for (let i = 0; i < cart.length; i++) {
  getCartFromLS(i);
}

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", () => {
    saveProductToLS(i);
    displayProductToCart(i);
  });
}

const ClearAllCart = () => {
  productNumber = 0;
  window.localStorage.setItem(DB_NAME, JSON.stringify([]));

  let productToDelete = document.querySelectorAll(".product");
  productToDelete = Array.from(productToDelete);
  productToDelete.forEach((i) => {
    i.remove();
  });

  //
  console.clear();
  console.log("Local Storage was cleared");
};

const deleteBtn = document.querySelector(".button_clear_all");

deleteBtn.onclick = ClearAllCart;

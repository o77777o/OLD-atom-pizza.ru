const DB_NAME = "DataBase";

const clearAllCart = () => {
  window.localStorage.setItem(DB_NAME, JSON.stringify([]));
  const productToDelete = document.querySelectorAll(".product");
  productToDelete.forEach((element) => {
    element.remove();
  });
};

const deleteProduct = (id) => {
  const all = JSON.parse(localStorage.getItem(DB_NAME));
  const elementHTML = productToDelete.find((product) => product.ID === id)
  const elementLS = all.find((product) => product.ID === id)

}





const getAllCart = () => {
  const all = JSON.parse(localStorage.getItem(DB_NAME));
  let totalProduct = document.querySelector(".total_product");
  for (let i = 0; i < all.length; i++) {
    const productInCart = document.createElement("div");
    productInCart.classList.add("product");
    productInCart.id = all[i].ID
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
  productInCart.id = element.ID
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

const init = () => {
  if (!localStorage.getItem(DB_NAME)) {
    localStorage.setItem(DB_NAME, JSON.stringify([]));
  }

  const products = document.querySelectorAll(".product_card");

  for (const product of products) {
    const description = product.childNodes[2];

    const addToCartButton = description.children[2];
    // console.log(addToCartButton);

    addToCartButton.addEventListener("click", () => {
      processButton(product.id);
      displayProduct(product.id);
    });
  }
};

document.querySelector(".button_clear_all").addEventListener("click", () => {
  clearAllCart();
});

window.onload = () => {
  getAllCart();
  init();
};

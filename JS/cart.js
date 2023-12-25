// let selectedProduct = "";
// let productNumber = 0;

// let cart = JSON.parse(localStorage.getItem(DB_NAME));

// const allButtons = document.querySelectorAll(
//   ".price_product_card"
// );
// const totalProduct = document.querySelector(".total_product");
// //----------------------------------------------

// const getCartFromLS = (i) => {
//   productNumber += 1;

//   const productInCart = document.createElement("div");
//   productInCart.classList.add("product");
//   productInCart.innerHTML = `
//     <div class="product_number">${productNumber}.</div>
//     <div class="product_name">${cart[i].name}</div>
//     <div class="product_count">3 шт.</div>
//     <div class="product_price">${cart[i].price}₽</div>
//     `;
//   totalProduct.appendChild(productInCart);
// };

// const displayProductToCart = (i) => {
//   productNumber += 1;
//   const correctIndex = i % menuPosition.length;
//   const productInCart = document.createElement("div");
//   productInCart.classList.add("product");
//   productInCart.innerHTML = `
//     <div class="product_number">${productNumber}.</div>
//     <div class="product_name">${menuPosition[correctIndex].name}</div>
//     <div class="product_count">3 шт.</div>
//     <div class="product_price">${menuPosition[correctIndex].price}₽</div>
//     `;
//   totalProduct.appendChild(productInCart);
// };

// const saveProductToLS = (i) => {
//   const correctIndex = i % menuPosition.length;
//   console.log(menuPosition, menuPosition.length, correctIndex);
//   selectedProduct = menuPosition[correctIndex];

//   cart = JSON.parse(localStorage.getItem(DB_NAME));
//   if (!localStorage.getItem(DB_NAME)) {
//     localStorage.setItem(DB_NAME, JSON.stringify([]));
//   }
//   cart.push(selectedProduct);
//   localStorage.setItem(DB_NAME, JSON.stringify(cart));
// };

const DB_NAME = "DataBase";

const clearAllCart = () => {
  window.localStorage.setItem(DB_NAME, JSON.stringify([]));
  let productToDelete = document.querySelectorAll(".product")
  productToDelete.forEach((element) => {
    element.remove();
  });
};

const processButton = (id) => {
  const element = menuPosition.find((element) => element.ID === id);

  if (!element) {
    alert("Ты куда жмал бля");
    return;
  }

  const all = JSON.parse(localStorage.getItem(DB_NAME));
  localStorage.setItem(DB_NAME, JSON.stringify([...all, element]));
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
      getCartFromLS(element);
    });
  }
};

const getCartFromLS = (element) => {
  let all = JSON.parse(localStorage.getItem(DB_NAME));
  let totalProduct = document.querySelector(".total_product");

  all.forEach((element) => {
    const productInCart = document.createElement("div");
    productInCart.classList.add("product");
    productInCart.innerHTML = `
      <div class="product_number">${all.length}.</div>
      <div class="product_name">${all[element].name}</div>
      `;
    totalProduct.appendChild(productInCart);
  } )
};

document.querySelector(".button_clear_all").addEventListener("click", () => {
  clearAllCart();
});

window.onload = () => {
  init();
};

// let totalProduct = document.querySelector(".total_product");

// const productInCart = document.createElement("div");
// productInCart.classList.add("product");
// productInCart.innerHTML = `
//   <div class="product_number">${all.lenght + 1}.</div>
//   <div class="product_name">${all[element].name + 1}</div>
//   <div class="product_count">-настроить-</div>
//   <div class="product_price">${all[element].price}₽</div>
//   `;
// totalProduct.appendChild(productInCart);

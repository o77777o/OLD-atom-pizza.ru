//----------------------- ЧЕРНОВИК --------------------------

// из add to cart-----------------------------

// JSON.stringify(selectedProduct)

// const all_buttons = document.querySelectorAll(
//   ".price_product, .price_modal_card"
// );
//Конвертер строки в число работает по всем кнопкам с ценами на сайте.
// for (let i = 0; i < all_buttons.length; i++) {
//   all_buttons[i].addEventListener("click", (event) => {
//     const value = event.target.textContent;
//     const priceValue = parseFloat(value);
//     console.log(priceValue);
//   });
// }

// //Сохранение пиццы по карточке продукта
// for (let i = 0; i < all_buttons_product_card.length; i++) {
//   all_buttons_product_card[i].addEventListener("click", () => {
//     selected_product = pizzas[i];
//     selected_item_price = pizzas[i].price;
//     localStorage.setItem([i], JSON.stringify(selected_product));
//     console.log(selected_product);
//     console.log(item_price);
//   });
// }

// //Сохранение пиццы по модальному окну объекта
// for (let i = 0; i < all_buttons_modal_card.length; i++) {
//   all_buttons_modal_card[i].addEventListener("click", () => {
//     selected_product = pizzas[i];
//     selected_item_price = pizzas[i].price;
//     localStorage.setItem([i], JSON.stringify(selected_product));
//     console.log(selected_product);
//     console.log(item_price);
//   });
// }

//Тест отрисовки корзины

// for (let i = 0; i < menuPosition.length; i++) {
//   let productNumber = i + 1
//   const productInCart = document.createElement("div");
//   productInCart.classList.add("product");
//   productInCart.innerHTML = `
//   <div class="product_number">${productNumber}.</div>
//   <div class="product_name">${menuPosition[i].name}</div>
//   <div class="product_count">3 шт.</div>
//   <div class="product_price">${menuPosition[i].price}₽</div>
//   `;
//   totalProduct.appendChild(productInCart)
// }

//---------------------------------------------------------------------
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


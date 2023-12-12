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

//---------------------------------------------------------------------
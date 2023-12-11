const all_buttons = document.querySelectorAll(
  ".price_modal_card, .price_product"
);

const all_product_cards = document.querySelectorAll(
  ".product_card, .modal_card"
);

//Конвертер строки в число
for (let i = 0; i < all_buttons.length; i++) {
  all_buttons[i].addEventListener("click", (event) => {
    const value = event.target.textContent;
    const priceValue = parseFloat(value);
    console.log(priceValue);
  });
}

const add_to_cart = () => {
  for (let i = 0; i < all_product_cards.length; i++) {
    all_product_cards[i].addEventListener("click", () => {
      const selectedProduct = pizzas[i];
      console.log(selectedProduct);
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct)); // Сохраняем выбранный продукт в localStorage
      console.log("Выбранный продукт:", selectedProduct);
    });
  }
};

window.addEventListener("load", () => {
  add_to_cart();
});

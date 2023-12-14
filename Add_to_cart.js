//Куда несем данные
let selected_product = "";
let selected_item_price = 0;

//Что будем отображать в корзине
let total_products = [];
let total_price = 0;

//массив всех элементов-кнопок
const all_buttons = document.querySelectorAll(
  ".price_product, .price_modal_card"
);

const saveToLS = (i) => {
  const correct_index = i % menu_position.length;
  console.log(correct_index);
  selected_product = menu_position[correct_index];
  selected_item_price = menu_position[correct_index].price;
  localStorage.getItem("DataBase")
  total_products.push(selected_product)
  console.log(total_products)

  localStorage.setItem("DataBase", JSON.stringify(total_products));
  // console.log(selected_product);
  // console.log(selected_item_price);

  
  
};

console.log(total_products)

if (total_products == null) {
  total_products = []
}

console.log(total_products)



for (let i = 0; i < all_buttons.length; i++) {
  all_buttons[i].addEventListener("click", () => {
    saveToLS(i);
  });
}

// Быстрая кнопка очистки LS
const ClearAllCart = () => {
  console.clear();
  window.localStorage.clear();
  console.log("Local Storage was cleared");
};

const delbtn = document.querySelector("#del");

delbtn.onclick = ClearAllCart;

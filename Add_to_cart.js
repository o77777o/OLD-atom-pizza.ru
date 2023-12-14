//Куда несем данные
let selectedProduct = '';
let selectedItemPrice = 0;
const DB_NAME = 'DataBase';

//Что будем отображать в корзине
// let totalProducts = localStorage.getItem("DataBase");
let totalPrice = 0;

//массив всех элементов-кнопок
const allButtons = document.querySelectorAll(
  '.price_product, .price_modal_card',
);

const saveToLS = (i) => {
  const correct_index = i % menu_position.length;
  selectedProduct = menu_position[correct_index];
  selectedItemPrice = menu_position[correct_index].price;

  totalProducts.push(selectedProduct);

  // if null
  if (!localStorage.getItem(DB_NAME)) {
    localStorage.setItem(DB_NAME, JSON.stringify([]));
  }

  const cart = JSON.parse(localStorage.getItem(DB_NAME));

  cart.push(selectedProduct);

  localStorage.setItem('DataBase', JSON.stringify(cart));
};

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', () => {
    saveToLS(i);
  });
}

// Быстрая кнопка очистки LS
const ClearAllCart = () => {
  console.clear();
  window.localStorage.clear();
  console.log('Local Storage was cleared');
};

const delbtn = document.querySelector('#del');

delbtn.onclick = ClearAllCart;

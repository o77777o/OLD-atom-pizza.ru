//Получаем нужные элементы
const removeButtonHTML = document.querySelector(".remove_button");
const addButtonHTML = document.querySelector(".add_button");
const countHTML = document.querySelector(".count");
let count = 0;

//уменьшить кол-во приборов на 1
const removeСutlery = () => {
  if (!count) {
    return;
  }
  --count;
  countHTML.innerHTML = count;
};

//увеличить кол-во приборов на 1
const addСutlery = () => {
  ++count;
  countHTML.innerHTML = count;
};

//Повесить клик
const addClick = (elementHTML, func) => {
  elementHTML.addEventListener("click", () => {
    func();
  });
};

//точка входа
const initOrder = () => {
  addClick(removeButtonHTML, removeСutlery);
  addClick(addButtonHTML, addСutlery);
};

initOrder()

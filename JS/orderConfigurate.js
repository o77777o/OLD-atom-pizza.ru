let count = 0;

//Повесить click
const addClick = (elementHTML, func, arg) => {
  elementHTML.addEventListener("click", () => {
    func(arg);
  });
};

//уменьшить кол-во приборов на 1
const removeСutlery = (countHTML) => {
  if (!count) {
    return;
  }
  --count;
  countHTML.innerHTML = count;
};

//увеличить кол-во приборов на 1
const addСutlery = (countHTML) => {
  ++count;
  countHTML.innerHTML = count;
};

//Настроить кол-во
const configurateCount = () => {
  const removeButtonHTML = document.querySelector(".remove_button");
  const addButtonHTML = document.querySelector(".add_button");
  const countHTML = document.querySelector(".count");

  addClick(removeButtonHTML, removeСutlery, countHTML);
  addClick(addButtonHTML, addСutlery, countHTML);
};

//Формат номера телефона
const phoneFormat = (e) => {
  let x = e.target.value
    .replace(/\D/g, "")
    .replace(/^(8|7)/, "7")
    .replace(/^9/, "79")
    .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  e.target.value =
    "+" +
    (x[1] ? x[1] : "") +
    (x[2] ? " " + x[2] : "") +
    (x[3] ? " " + x[3] : "") +
    (x[4] ? " " + x[4] : "") +
    (x[5] ? " " + x[5] : "");
};

//Редактор формата номера телефона
const configuratePhoneFormat = () => {
  const phoneNumberHTML = document.querySelector("#input_phone_number");

  phoneNumberHTML.addEventListener("input", (e) => {
    phoneFormat(e);
  });
};

//Чекбокс на самовывоз
const makeOrderToGo = (checkbox, element) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      element.style.display = "none";
    } else {
      element.style.display = "";
    }
  });
};

//Настроить заказ на самовывоз
const configurateToGo = () => {
  const pickup = document.querySelector("#pickup");
  const fullAddressHTML = document.querySelector(".full_address");
  makeOrderToGo(pickup, fullAddressHTML);
};

//точка входа
const initOrderConfigurate = () => {
  configurateCount();
  configuratePhoneFormat();
};

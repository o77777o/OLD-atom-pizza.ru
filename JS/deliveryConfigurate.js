//Чекбокс на самовывоз
const makeOrderToGo = (checkbox, element) => {
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));

  if (userData.pickup === "yes") {
    checkbox.checked = true;
    element.classList.add("hide");
  } else {
    checkbox.checked = false;
    element.classList.remove("hide");
  }

  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      element.classList.add("hide");
      userData.pickup = "yes";
      localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
    } else {
      element.classList.remove("hide");
      userData.pickup = "no";
      localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
    }
  });
};

//Проверка на самовывоз

//Настроить заказ на самовывоз
const configurateToGo = () => {
  const pickup = document.querySelector("#pickup");
  const fullAddressHTML = document.querySelector(".full_address");
  makeOrderToGo(pickup, fullAddressHTML);
};

//Активировать кнопку перехода в корзину из адреса доставки
const activateButtonToCartFromDelivery = () => {
  const buttonToCartHTML = document.querySelector(".button_to_cart");
  const array = getFromLS();
  if (array.length) {
    addClick(buttonToCartHTML, saveUserDataToLS); 
    addClick(buttonToCartHTML, displayCartModal);
  } else {
    buttonToCartHTML.innerHTML = "В корзине ничего нет...";
    buttonToCartHTML.style.background = "var(--general_red_color)";
  }
};

//Активировать кнопку очистки адреса
const configurateButtonClearAddress = () => {
  const buttonClearAddressHTML = document.querySelector(
    ".button_clear_address"
  );
  addClick(buttonClearAddressHTML, updUserDataAddress);
};

//Активировать кнопку сброса настроек заказа
const configurateButtonClearOrderConfigurate = () => {
  const buttonClearOrderConfigurateHTML = document.querySelector(".button_clear_order_configurate")
  addClick(buttonClearOrderConfigurateHTML, updUserDataOrder)
}

//Вписать данные адреса из LS
const getUserDataFromLS = () => {
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));

  const inputAddressHTML = document.querySelector(".input_city_street_number");
  const inputEntranceHTML = document.querySelector(".input_entrance");
  const inputDoorCodeHTML = document.querySelector(".input_door_code");
  const inputFloorHTML = document.querySelector(".input_floor");
  const inputApartmentHTML = document.querySelector(".input_apartment ");
  const inputAddressCommentHTML = document.querySelector(
    ".input_address_comment"
  );

  inputAddressHTML.value = userData.delivery_address;
  inputEntranceHTML.value = userData.delivery_address_entrance;
  inputDoorCodeHTML.value = userData.delivery_address_door_code;
  inputFloorHTML.value = userData.delivery_address_floor;
  inputApartmentHTML.value = userData.delivery_address_apartment;
  inputAddressCommentHTML.value = userData.address_comment;

  console.log("Полет нормальный");
};

//Записать данные адреса в LS
const saveUserDataToLS = () => {
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));
  const inputAddressHTML = document.querySelector(".input_city_street_number");
  const inputEntranceHTML = document.querySelector(".input_entrance");
  const inputDoorCodeHTML = document.querySelector(".input_door_code");
  const inputFloorHTML = document.querySelector(".input_floor");
  const inputApartmentHTML = document.querySelector(".input_apartment ");
  const inputAddressCommentHTML = document.querySelector(
    ".input_address_comment"
  );

  userData.delivery_address = inputAddressHTML.value;
  userData.delivery_address_entrance = inputEntranceHTML.value;
  userData.delivery_address_door_code = inputDoorCodeHTML.value;
  userData.delivery_address_floor = inputFloorHTML.value;
  userData.delivery_address_apartment = inputApartmentHTML.value;
  userData.address_comment = inputAddressCommentHTML.value;

  localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
};

const configurateButtonSaveUserDataToLS = () => {
  const modalBackgroundHTML = document.querySelector(".modal_background");
  addClick(modalBackgroundHTML, saveUserDataToLS);
};

//Точка входа
const initDeliveryConfigurate = () => {
  getUserDataFromLS();
  configurateToGo();
  activateButtonToCartFromDelivery();
  configurateButtonClearAddress();
};

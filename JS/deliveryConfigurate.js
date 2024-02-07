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

//Чекбокс на способ оплаты
const pickPaymentMethod = () => {
  const paymentCheckbox = document.querySelector("#payment")
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));

  if (userData.payment_method === "card") {
    paymentCheckbox.checked = true;
  } else {
    paymentCheckbox.checked = false;
  }

  paymentCheckbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      userData.payment_method = "card";
      localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
    } else {
      userData.payment_method = "cash";
      localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
    }
  });
}

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
    addClick(buttonToCartHTML, saveUserDataAddressToLS);
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
  const buttonClearOrderConfigurateHTML = document.querySelector(
    ".button_clear_order_configurate"
  );
  addClick(buttonClearOrderConfigurateHTML, updUserDataOrder);
};

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
};

//Вписать данные настройски заказа из LS
const getUserDataOrderFromLS = () => {
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));
  const inputPhoneNumberHTML = document.querySelector("#input_phone_number");
  const commentForTheOrderHTML = document.querySelector(
    ".comment_for_the_order"
  );
  const cutleryCountHTML = document.querySelector(".count");

  pickPaymentMethod()

  inputPhoneNumberHTML.value = userData.phone_number
  commentForTheOrderHTML.value = userData.order_comment
  cutleryCountHTML.innerHTML = userData.cutlery
};

//Записать данные адреса в LS
const saveUserDataAddressToLS = () => {
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

//Записать данные настройки заказа в LS
const saveUserDataOrderToLS = () => {
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));
  const inputPhoneNumberHTML = document.querySelector("#input_phone_number");
  const commentForTheOrderHTML = document.querySelector(
    ".comment_for_the_order"
  );
  const cutleryCountHTML = document.querySelector(".count");

  userData.cutlery = cutleryCountHTML.innerHTML;
  userData.phone_number = inputPhoneNumberHTML.value;
  userData.order_comment = commentForTheOrderHTML.value;

  localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
};

//Сохранение данных адреса
const configurateButtonSaveUserDataAddressToLS = () => {
  const modalBackgroundHTML = document.querySelector(".modal_background");
  addClick(modalBackgroundHTML, saveUserDataAddressToLS);
};

//Сохранение данных настройки заказа
const configurateButtonSaveUserDataOrderToLS = () => {
  const modalBackgroundHTML = document.querySelector(".modal_background");
  addClick(modalBackgroundHTML, saveUserDataOrderToLS);
};

//Точка входа
const initDeliveryConfigurate = () => {
  getUserDataFromLS();
  configurateToGo();
  activateButtonToCartFromDelivery();
  configurateButtonClearAddress();
};

const DB_ORDER_CONFIGURATE = "Order configurate";

const setEmptyConfigurate = () => {
  let userData = {
    pickup: "no",
    delivery_address: "",
    delivery_address_entrance: "",
    delivery_address_door_code: "",
    delivery_address_floor: "",
    delivery_address_apartment: "",
    address_comment: "",

    cutlery: "0",
    payment_method: "cash",
    phone_number: "",
    order_comment: "",
  };

  return localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
};

//Проверка на данные настройки заказа
const createEmptyConfigurate = () => {
  if (!localStorage.getItem(DB_ORDER_CONFIGURATE)) {
    console.log("Создан новый пользователь");
    setEmptyConfigurate();
  }
};

//Сохранить свойство объекта
const saveUserDataKey = (key, value) => {
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));

  userData[key] = value;

  localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
};

//Очистить данные адреса доставки
const updUserDataAddress = () => {
  console.log("Адрес очищен");
  createEmptyConfigurate();
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));

  const inputAddressHTML = document.querySelector(".input_city_street_number");
  const inputEntranceHTML = document.querySelector(".input_entrance");
  const inputDoorCodeHTML = document.querySelector(".input_door_code");
  const inputFloorHTML = document.querySelector(".input_floor");
  const inputApartmentHTML = document.querySelector(".input_apartment ");
  const inputAddressCommentHTML = document.querySelector(
    ".input_address_comment"
  );

  inputAddressHTML.value = "";
  inputEntranceHTML.value = "";
  inputDoorCodeHTML.value = "";
  inputFloorHTML.value = "";
  inputApartmentHTML.value = "";
  inputAddressCommentHTML.value = "";

  userData.pickup = "no";
  userData.delivery_address = "";
  userData.address_comment = "";
  userData.delivery_address_entrance = "";
  userData.delivery_address_door_code = "";
  userData.delivery_address_floor = "";
  userData.delivery_address_apartment = "";

  localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));

  configurateToGo();
};

//Очистить данные настройки заказа
const updUserDataOrder = () => {
  console.log("Проверка связи");
  createEmptyConfigurate();
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));

  const phonenumberHTML = document.querySelector("#input_phone_number");
  const commentForTheOrderHTML = document.querySelector(
    ".comment_for_the_order"
  );

  phonenumberHTML.value = "";
  commentForTheOrderHTML.value = "";

  userData.payment_method = "cash";
  userData.phone_number = "";
  userData.order_comment = "";

  localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
};

const initUserConfigurate = () => {
  createEmptyConfigurate();
};

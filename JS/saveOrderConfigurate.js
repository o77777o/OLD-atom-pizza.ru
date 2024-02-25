const DB_ORDER_CONFIGURATE = "Order configurate";

const setEmptyConfigurate = () => {
  let userData = {
    pickup: false,
    deliveryAddress: "",
    deliveryAddressEntrance: "",
    deliveryAddressDoorCode: "",
    deliveryAddressFloor: "",
    deliveryAddressApartment: "",
    addressComment: "",

    cutlery: "0",
    paymentMethod: "cash",
    phoneNumber: "",
    orderComment: "",
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

  userData.pickup = false;
  userData.deliveryAddress = "";
  userData.addressComment = "";
  userData.deliveryAddressEntrance = "";
  userData.deliveryAddressDoorCode = "";
  userData.deliveryAddressFloor = "";
  userData.deliveryAddressApartment = "";

  localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));

  configurateToGo();
};

//Очистить данные настройки заказа
const updUserDataOrder = () => {
  createEmptyConfigurate();
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));

  const phonenumberHTML = document.querySelector("#input_phone_number");
  const commentForTheOrderHTML = document.querySelector(
    ".comment_for_the_order"
  );
  const cutleryCountHTML = document.querySelector(".count"); 
  
  cutleryCountHTML.innerHTML = "0"
  phonenumberHTML.value = "";
  commentForTheOrderHTML.value = "";

  userData.cutlery = "0"
  userData.paymentMethod = "cash";
  userData.phoneNumber = "";
  userData.orderComment = "";

  localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));

  pickPaymentMethod()
};

const initUserConfigurate = () => {
  createEmptyConfigurate();
};

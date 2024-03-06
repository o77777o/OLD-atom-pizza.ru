//Чекбокс на самовывоз
const makeOrderToGo = (checkbox, element) => {
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));

  if (userData.pickup) {
    checkbox.checked = true;
    element.classList.add("hide");
  } else {
    checkbox.checked = false;
    element.classList.remove("hide");
  }

  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      element.classList.add("hide");
      userData.pickup = true;
      localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
    } else {
      element.classList.remove("hide");
      userData.pickup = false;
      localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
    }
  });
};

//Чекбокс на способ оплаты
const pickPaymentMethod = () => {
  const paymentCheckbox = document.querySelector("#payment");
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));

  if (userData.paymentMethod === "card") {
    paymentCheckbox.checked = true;
  } else {
    paymentCheckbox.checked = false;
  }

  paymentCheckbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      userData.paymentMethod = "card";
      localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
    } else {
      userData.paymentMethod = "cash";
      localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
    }
  });
};

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

//Активировать кнопку оформления заказ
const configurateButtonPlaceAnOrder = () => {
  const buttonPlaceAnOrderHTML = document.querySelector(
    ".button_place_an_order"
  );

  addClick(buttonPlaceAnOrderHTML, getAllData);
};

//Получить все данные по заказу
const getAllData = async () => {
  const submitData = async () => {
    const order = getFromLS();
    const userData = getUserData();

    const postDataObject = {
      order: {
        info: userData,
        items: order,
      },
    };

    postDataObject.order.items.forEach((item) => {
      delete item.photo;
    });

    console.log(postDataObject);

    try {
      const response = await fetch("http://151.248.114.4/order/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postDataObject),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Данные успешно отправлены:", responseData);
      } else {
        throw new Error("Ошибка HTTP: " + response.status);
      }
    } catch (error) {
      console.error("Ошибка отправки данных:", error);
    }
  };

  submitData();
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

  inputAddressHTML.value = userData.deliveryAddress;
  inputEntranceHTML.value = userData.deliveryAddressEntrance;
  inputDoorCodeHTML.value = userData.deliveryAddressDoorCode;
  inputFloorHTML.value = userData.deliveryAddressFloor;
  inputApartmentHTML.value = userData.deliveryAddressApartment;
  inputAddressCommentHTML.value = userData.addressComment;
};

//Вписать данные настройски заказа из LS
const getUserDataOrderFromLS = () => {
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));
  const inputPhoneNumberHTML = document.querySelector("#input_phone_number");
  const commentForTheOrderHTML = document.querySelector(
    ".comment_for_the_order"
  );
  const cutleryCountHTML = document.querySelector(".count");

  pickPaymentMethod();

  inputPhoneNumberHTML.value = userData.phoneNumber;
  commentForTheOrderHTML.value = userData.orderComment;
  cutleryCountHTML.innerHTML = userData.cutlery;
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

  userData.deliveryAddress = inputAddressHTML.value;
  userData.deliveryAddressEntrance = inputEntranceHTML.value;
  userData.deliveryAddressDoorCode = inputDoorCodeHTML.value;
  userData.deliveryAddressFloor = inputFloorHTML.value;
  userData.deliveryAddressApartment = inputApartmentHTML.value;
  userData.addressComment = inputAddressCommentHTML.value;

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
  userData.phoneNumber = inputPhoneNumberHTML.value;
  userData.orderComment = commentForTheOrderHTML.value;

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

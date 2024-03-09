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
    buttonToCartHTML.style.background = "var(--general_bg_color)";
    buttonToCartHTML.style.pointerEvents = "none";
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
const configurateButtonPlaceAnOrder = (buttonPlaceAnOrderHTML) => {
  buttonPlaceAnOrderHTML.addEventListener("click", () => {
    getAllData(buttonPlaceAnOrderHTML);
    // Отрисовка окна
  });
};

//Деактивация кнопки оформить заказ
const deactivateButtonPlaceAnOrder = () => {
  const buttonPlaceAnOrderHTML = document.querySelector(
    ".button_place_an_order"
  );
  buttonPlaceAnOrderHTML.style.pointerEvents = "none";
  buttonPlaceAnOrderHTML.style.backgroundColor = "var(--general_bg_color)";
};

//Настройка заказа
const checkDeliveryMethod = () => {
  const shortAddress = document.querySelector(".short_address");
  const userData = getUserData();
  if (userData.pickup) {
    shortAddress.innerHTML = `
        <div class="head_order"> 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="AddressOption_icon__eM_dQ" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3052 16.5668L15.5117 14.0526C15.4203 13.9704 15.3772 13.8472 15.3975 13.726L15.8387 11.0787C15.8569 10.9693 16.0026 10.9402 16.064 11.0326C16.9278 12.3319 18.1772 13.4663 20.0063 14.1979C20.5598 14.4193 21.1881 14.1501 21.4095 13.5965C21.6309 13.0429 21.3617 12.4147 20.8081 12.1933C18.9468 11.4487 17.9047 10.1865 17.2564 8.72536C16.9785 8.09906 16.6196 7.34235 16.1056 6.72493C15.5693 6.08069 14.8143 5.52973 13.7675 5.44237C13.3238 5.40535 12.8316 5.42235 12.3435 5.54889C9.35858 6.29791 7.38234 9.20441 6.74692 13.0169C6.64891 13.605 7.0462 14.1612 7.6343 14.2593C8.2224 14.3573 8.77861 13.96 8.87663 13.3719C9.22966 11.2537 9.99769 9.71889 10.9671 8.75636C11.0448 8.67923 11.1707 8.74395 11.1586 8.85275L10.7582 12.4565C10.7134 12.8599 10.8658 13.2602 11.1675 13.5317L16.6201 18.4391C16.7888 18.5909 16.9083 18.7896 16.9633 19.0097L17.9851 23.0967C18.1538 23.7715 18.8376 24.1818 19.5124 24.0131C20.1872 23.8444 20.5975 23.1606 20.4288 22.4858L19.4071 18.3988C19.2304 17.6921 18.8467 17.0542 18.3052 16.5668Z" fill="black"></path>
        <path d="M11.8069 20.5764C12.2988 20.0844 12.6403 19.4623 12.7913 18.7831L13.1487 17.1746C13.1769 17.0479 13.1346 16.9159 13.0382 16.8291L11.3495 15.3093C11.213 15.1864 10.9946 15.2562 10.9548 15.4355L10.3323 18.2367C10.2853 18.4483 10.1789 18.642 10.0257 18.7953L6.9212 21.8998C6.42935 22.3916 6.42935 23.1891 6.9212 23.6809C7.41305 24.1728 8.2105 24.1728 8.70235 23.6809L11.8069 20.5764Z" fill="black"></path>
        <path d="M18.0075 2.39898C18.0075 3.7239 16.9334 4.79797 15.6085 4.79797C14.2835 4.79797 13.2095 3.7239 13.2095 2.39898C13.2095 1.07406 14.2835 0 15.6085 0C16.9334 0 18.0075 1.07406 18.0075 2.39898Z" fill="black"></path>
        <path d="M3.93323 2.39898H10.9249C11.5242 2.39898 12.01 2.88231 12.01 3.47853V4.02397C12.01 4.24295 11.861 4.43258 11.652 4.49774C8.25124 5.55778 6.2135 8.92122 5.56375 12.8197C5.52956 13.0249 5.36394 13.1944 5.15599 13.1944H3.49919C2.87863 13.1944 2.38445 12.6776 2.41544 12.061L2.84948 3.42462C2.87836 2.85007 3.35501 2.39898 3.93323 2.39898Z" fill="black"></path>
      </svg>
          | Самовывоз <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="" xmlns="http://www.w3.org/2000/svg"><path d="M6 13L11 8L6 3" stroke="var(--general_font_color)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
      </div>
    `;
  }
};

//Условие доставки от 1100 рублей на заказ
const checkTotalOrderPriceForDelivery = () => {
  const buttonPlaceAnOrderHTML = document.querySelector(
    ".button_place_an_order"
  );
  const userData = getUserData();
  const totalOrderPrice = showSum();

  if (!userData.pickup && totalOrderPrice < 1100) {
    deactivateButtonPlaceAnOrder();
    buttonPlaceAnOrderHTML.innerHTML = `
    Доставим при заказе от 1100 ₽
    `;
    // console.log("Кнопка неактивна");
  } else {
    // console.log("Активация кнопки для оформления заказа");
    configurateButtonPlaceAnOrder(buttonPlaceAnOrderHTML);
  }
};

//Сообщить инфо, что ресторан не работает
const reportRestaurantIsClose = () => {
  const buttonPlaceAnOrderHTML = document.querySelector(
    ".button_place_an_order"
  );
  deactivateButtonPlaceAnOrder();
  buttonPlaceAnOrderHTML.innerHTML = `
    Мы закрыты. Работаем с 11:00 – 23:00
    `;
};

//Условие работы ресторана

const checkRestaurantScheduleInCart = () => {
  if (isWorkingTimeNow()) {
    checkTotalOrderPriceForDelivery();
    return;
  } else {
    reportRestaurantIsClose();
    return;
  }
};

//Получить все данные по заказу, направить заказ на сервер
const getAllData = async (buttonPlaceAnOrderHTML) => {
  saveUserDataOrderToLS();

  const order = getFromLS();
  const userData = getUserData();
  try {
    switch (true) {
      case !userData.deliveryAddress && !userData.pickup:
        buttonPlaceAnOrderHTML.style.backgroundColor =
          "var(--general_bg_color)";

        buttonPlaceAnOrderHTML.innerHTML = `Адрес доставки не заполнен`;
        return false;
      case !userData.phoneNumber:
        buttonPlaceAnOrderHTML.style.backgroundColor =
          "var(--general_bg_color)";

        buttonPlaceAnOrderHTML.innerHTML = `Номер телефона не заполнен`;
        return false;
      case !order.length:
        buttonPlaceAnOrderHTML.style.backgroundColor =
          "var(--general_bg_color)";

        buttonPlaceAnOrderHTML.innerHTML = `В корзине ничего нет`;
        return false;
      default:
        buttonPlaceAnOrderHTML.innerHTML = `Оформить заказ`;
        buttonPlaceAnOrderHTML.style.backgroundColor =
          "var(--general_green_color)";

        order.forEach((item) => {
          delete item.photo;
        });

        const postDataObject = {
          order: {
            info: userData,
            items: order,
          },
        };

        console.log(postDataObject);

        // Отправляем данные на сервер
        const response = await fetch("https://api.atom-pizza.ru/order/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postDataObject),
        });

        if (response.ok) {
          const responseData = "";
          console.log("Данные успешно отправлены:", responseData);
        } else {
          throw new Error("Ошибка HTTP: " + response.status);
        }

        // Очищаем корзину, сохраняем данные заказа в локальном хранилище и отображаем модальное окно статуса заказа
        deactivateButtonPlaceAnOrder();
        clearAllCart();
        displayStatusOrderModal();

        return true; // Все проверки прошли успешно
    }
  } catch (error) {
    buttonPlaceAnOrderHTML.style.pointerEvents = "none";
    buttonPlaceAnOrderHTML.style.backgroundColor = "var(--general_red_color)";
    buttonPlaceAnOrderHTML.innerHTML = `Не удалось оформить заказ`;
    console.error("Ошибка отправки данных:", error);
    return true; // Произошла ошибка при отправке данных
  }
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

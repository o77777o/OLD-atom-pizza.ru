//Чекбокс на самовывоз
const makeOrderToGo = (checkbox, element) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      element.classList.add("hide");
    } else {
      element.classList.remove("hide");
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
    addClick(buttonToCartHTML, displayCartModal);
  } else {
    buttonToCartHTML.innerHTML = "В корзине ничего нет...";
    buttonToCartHTML.style.background = "var(--general_red_color)";
  }
};


//Точка входа
const initDeliveryConfigurate = () => {
  configurateToGo();
  activateButtonToCartFromDelivery();
};

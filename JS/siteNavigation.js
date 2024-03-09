const scrollToTop = () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//Подняться наверх
const getToTop = () => {
  const pushToTopHTML = document.querySelector(".fixed_logo");
  addClick(pushToTopHTML, scrollToTop);
};

//Получить текущее значение прокрутки страницы
const getCurentScroll = () => {
  const fixedNavigationHTML = document.querySelector(".fixed_navigation");
  const pushToTopHTML = document.querySelector(".fixed_logo");
  const curentScroll = window.scrollY;
  if (curentScroll >= 300) {
    fixedNavigationHTML.classList.add("show");
    pushToTopHTML.classList.add("show");
  } else {
    fixedNavigationHTML.classList.remove("show");
    pushToTopHTML.classList.remove("show");
  }
};

// Спрятать кнопку поднятия наверх
const hideGetToTop = () => {
  window.addEventListener("scroll", () => {
    getCurentScroll();
  });
};

// Функция для получения текущей даты и времени по Москве
const getCurrentDateTimeInMoscow = () => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const moscowOffset = 3;
  const moscowTime = new Date(utc + 3600000 * moscowOffset);
  return moscowTime;
};

// Функция для проверки, является ли текущее время рабочим. Среда (3) - воскресение (7)
const isWorkingTimeNow = () => {
  const moscowTime = getCurrentDateTimeInMoscow();
  const hours = moscowTime.getHours();
  const minutes = moscowTime.getMinutes();

  // Проверяем, что время в рамках каждого дня и часы в пределах 11:00 - 22:59
  const isWorkingHours =
    (hours > 11 || (hours === 11 && minutes >= 0)) &&
    (hours < 23 || (hours === 23 && minutes === 0));

  return true;
};

// Проверяем работает ли сегодня ресторан
const checkRestaurantSchedule = () => {
  if (isWorkingTimeNow()) {
    return;
  } else {
    displayAlertModal();
  }
};

const createAlertModal = (parentHTML) => {
  const alertModal = document.createElement("div");
  alertModal.classList.add("сlosed_restaurant");

  alertModal.innerHTML = `
  <div class="alert_content">
  <div class="modal_window_title">Здравствуйте!</div> <p>Сейчас мы закрыты.</p> <p>Работаем с 11:00 – 23:00.</p> 
  <div class="button_open_site">Открыть сайт</div>
  </div>
  `;
  makeSmoothAnimation(alertModal);
  parentHTML.appendChild(alertModal);
  activateButtonOpenSite();
  return alertModal;
};

const createStatusOrderModal = (parentHTML) => {
  const statusOrderModal = document.createElement("div");
  statusOrderModal.classList.add("status_order_modal");

  statusOrderModal.innerHTML = `
  <div class="alert_content">
  <div class="modal_window_title">Спасибо за заказ!</div> 
  <p>Ожидайте звонка оператора, для подтверждения</p> 
  
  <div class="button_open_site">Открыть сайт</div>
  </div>
  `;
  makeSmoothAnimation(statusOrderModal);
  parentHTML.appendChild(statusOrderModal);
  activateButtonOpenSite();
  return statusOrderModal;
};

const activateButtonOpenSite = () => {
  const buttonOpenSiteHTML = document.querySelector(".button_open_site");
  addClick(buttonOpenSiteHTML, checkSecondModal);
};

const displayAlertModal = () => {
  const modalWindow = document.querySelector(".modal_window");
  checkSecondModal();
  createModalBackground(modalWindow);
  createAlertModal(modalWindow);
};

const displayStatusOrderModal = () => {
  const modalWindow = document.querySelector(".modal_window");
  checkSecondModal();
  createModalBackground(modalWindow);
  createStatusOrderModal(modalWindow);
};

//Точка входа
const initNavigation = () => {
  getCurentScroll();
  checkRestaurantSchedule();
  hideGetToTop();
  getToTop();
};

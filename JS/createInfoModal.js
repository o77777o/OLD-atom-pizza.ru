//Точка входа
const initButtonOpenContactInfo = () => {
  configurateButtonOpenContactInfo();
};

//Настроить кнопку открытия корзины
const configurateButtonOpenContactInfo = () => {
  const buttonOpenContactInfo = document.querySelector(".fixed_contacts");

  addClick(buttonOpenContactInfo, displayContactInfoModal);
};

//Отобразить модальное окно корзины
const displayContactInfoModal = () => {
  const modalWindow = document.querySelector(".modal_window");
  checkSecondModal();
  createModalBackground(modalWindow);
  createContactModal(modalWindow);
  initYmapsContactInfo();
  deleteModalCardButton();
};

//Создать модальное окно корзины
const createContactModal = (parentHTML) => {
  const contactModal = document.createElement("div");
  contactModal.classList.add("modal_contact_info");

  contactModal.innerHTML = `
    <div class="fixed_map" id="fixed-map"></div>
    <div class="delivery_info">
        <div class="modal_window_title">Контакты</div>
        <a class="pizza_address" href="https://yandex.ru/maps/-/CDFCFV7d" target="_blank">Проспект Маршала Блюхера, 12ГК</a>
        <a class="pizza_phone" href="tel: +79019760789">+7 (901) 976 07 89</a>
        <a class="pizza_community" href="https://t.me/KyXoNbKa" target="_blank">Обратная связь</a>
        <div class="work_time">Работаем с ${TIME_START}:00 – ${TIME_END}:00</div>
    </div>
  
      `;

  makeSmoothAnimation(contactModal);
  parentHTML.appendChild(contactModal);

  return contactModal;
};

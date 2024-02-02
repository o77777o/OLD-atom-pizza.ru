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
  initYmapsContactInfo()
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
        <div class="pizza_address">
        <a href="https://yandex.ru/maps/-/CDBEyR6k" target="_blank"
            >Проспект Маршала Блюхера, 12ГК</a
        >
        </div>
        <div class="pizza_phone"><a href="tel: +79040874827">Телефон +7(904) 087 48 27</a></div>
        <div class="work_time">Ср-Вск 10:00 - 21:00</div>
    </div>
  
      `;
  makeSmoothAnimation(contactModal);
  parentHTML.appendChild(contactModal);

  return contactModal;
};

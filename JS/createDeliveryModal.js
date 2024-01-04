//Точка входа
const initButtonOpenDeliveryModal = () => {
  const buttonOpenDeliveryModal = document.querySelector(".fixed_delivery_zone");

  addClick(buttonOpenDeliveryModal, displayDeliveryModal);
};

const displayDeliveryModal = () => {
  const modalWindow = document.querySelector(".modal_window");

  createModalBackground(modalWindow);
  const deliveryModal = createDeliveryModal(modalWindow);
  initYmaps()
  configurateToGo()
  deleteModalCard(deliveryModal);
};

//Создать модальное окно зоны доставки

const createDeliveryModal = (parentHTML) => {
  const deliveryModal = document.createElement("div");
  deliveryModal.classList.add("modal_delivery_area");

  deliveryModal.innerHTML = `
    <div class="delevery_map">
    <div id="map"></div>
  </div>
  <div class="delivery_address">
    <div class="modal_window_title">Адрес доставки</div>

    <div class="pickup">
      Самовывоз
      <label class="toggle">
        <input type="checkbox" id="pickup" />
        <div class="slider"></div>
      </label>
    </div>

    <div class="full_address">
      <input
        class="input_city_street_number grid_whole"
        placeholder="Город, улица и номер дома"
        type="text"
        id="addressInput"
      />

      <input
        class="input_entrance grid_half"
        placeholder="Парадная"
        type="text"
      />

      <input
        class="input_door_code grid_half"
        placeholder="Домофон"
        type="text"
      />

      <input class="input_floor grid_half" placeholder="Этаж" type="text" />

      <input
        class="input_apartment grid_half"
        placeholder="Квартира"
        type="text"
      />

      <input
        class="input_address_comment grid_whole"
        placeholder="Комментарий к адресу"
        type="text"
      />
    </div>
    <div class="button_to_cart">Далее</div>
  </div>
    `;
    parentHTML.appendChild(deliveryModal);

  return deliveryModal;
};

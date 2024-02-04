//Точка входа
const initButtonOpenCart = () => {
  configurateButtonOpenCart();
};

//Настроить кнопку открытия корзины
const configurateButtonOpenCart = () => {
  const buttonOpenCart = document.querySelector(".button_open_cart");

  addClick(buttonOpenCart, displayCartModal);
};

//Отобразить модальное окно корзины
const displayCartModal = () => {
  const modalWindow = document.querySelector(".modal_window");
  checkSecondModal();
  createModalBackground(modalWindow);
  createCartModal(modalWindow);
  activateCart();
  deleteModalCardButton();
};

//Активировать корзину после отображения
const activateCart = () => {
  pushButtonClearAll();
  configurateButtonClearOrderConfigurate();
  displayAllPositionInCart();
  initOrderConfigurate();
};

//Создать модальное окно корзины
const createCartModal = (parentHTML) => {
  const cartModal = document.createElement("div");
  cartModal.classList.add("modal_shopping_cart");

  cartModal.innerHTML = `
      <div class="product_list">
      <div class="topic_cart">
        <div class="modal_window_title">Корзина</div>
        <div class="button_clear_all">Очистить</div>
      </div>

      <div class="total_product"></div>
      <div class="total_cost">Итого:</div>
    </div>

    <div class="order_registration">
      <div class="modal_window_title">Заказ</div>

      <div class="cutlery">
        <div class="head_order">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.51979 2.22656C5.01685 2.22656 5.41979 2.70607 5.41979 3.12656C5.41979 3.12656 5.5289 7.06935 5.5289 8.01953C5.5289 8.96972 6.44975 9.98187 6.44975 9.50012C6.44975 9.01838 6.61979 3.12656 6.61979 3.12656C6.61979 2.62951 7.02274 2.22656 7.51979 2.22656C8.01685 2.22656 8.41979 2.62951 8.41979 3.12656C8.41979 3.12656 8.59756 9.01838 8.59756 9.50012C8.59756 9.98187 9.39899 9.10999 9.47735 8.01953C9.5557 6.92908 9.61979 3.12656 9.61979 3.12656C9.61979 2.70848 10.0227 2.22656 10.5198 2.22656C11.0168 2.22656 11.3405 2.70659 11.4591 3.12656C11.5778 3.54653 12.3776 9.28482 11.8578 11C11.3381 12.7152 8.8672 12.4055 8.41979 12.4055C8.41979 12.4055 9.52018 19.0234 9.52018 20.0234C9.52018 21.0234 8.62531 22.0002 7.51977 22C6.41445 21.9998 5.52019 21.0234 5.52019 20.0234C5.52019 19.0234 6.61979 12.4055 6.61979 12.4055C6.13314 12.4055 3.69221 12.7171 3.17011 11C2.64801 9.28286 3.48554 3.55 3.58554 3.12656C3.68555 2.70312 4.02274 2.22656 4.51979 2.22656Z"
              fill="var(--general_font_color)"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.9727 2.10156C18.7579 2.10156 18.5606 2.17685 18.4059 2.30248C18.2304 2.40842 18.0523 2.55837 17.8671 2.76038C17.4576 3.20723 16.9346 3.99644 16.2812 5.42242C15.6494 6.80118 15.3212 8.50398 15.1453 9.9044C14.9459 11.491 15.8593 12.8317 17.2096 13.4815C16.9556 14.8171 16.7263 15.8298 16.5383 16.6603L16.5383 16.6603C16.2189 18.0709 16.0185 18.9558 16.0185 20.0041C16.0185 21.7444 17.4895 21.9961 18.0176 21.9961C18.5457 21.9961 20.0215 21.7362 20.0215 20.0041C20.0215 19.305 20.0122 16.4015 20.0012 13.1869C20.0145 13.1271 20.0215 13.0651 20.0215 13.0016V3.00156C20.0215 2.50451 19.5941 2.10156 19.0668 2.10156V2.10639L19.0636 2.10606C19.0633 2.10157 19.0629 2.10157 19.0625 2.10157L19.0582 2.1016L19.0495 2.10171L19.0319 2.10216L19.0184 2.10271C19.0032 2.10195 18.988 2.10156 18.9727 2.10156Z"
              fill="var(--general_font_color)"
            ></path>
          </svg>
          | Приборы
        </div>
        <div class="configurate">
          <div class="remove_button">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8h5H3"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div class="count">${count}</div>
          <div class="add_button">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8V3m0 5v5m0-5h5M8 8H3"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="payment_method">
        <div class="head_order">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="26"
            height="26"
            viewBox="0 0 50.000000 50.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
              fill="var(--general_font_color)"
              stroke="none"
            >
              <path
                d="M206 435 c-65 -19 -121 -36 -124 -39 -3 -3 63 -6 146 -6 l152 0 0 28 c0 31 -16 52 -39 51 -9 0 -69 -16 -135 -34z"
              />
              <path
                d="M60 350 c-18 -18 -20 -33 -20 -148 0 -112 2 -131 18 -145 16 -15 45 -17 194 -17 221 0 208 -10 208 163 0 175 10 167 -210 167 -157 0 -172 -2 -190 -20z m348 -143 c4 -20 -25 -34 -40 -19 -15 15 -1 44 19 40 10 -2 19 -11 21 -21z"
              />
            </g></svg
          >| Оплата картой
        </div>
        <label class="toggle">
          <input type="checkbox" />
          <div class="slider"></div>
        </label>
      </div>
      <div class="phone_number">
        <div class="head_order">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--general_font_color)"
              d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"
            />
          </svg>
          <input
            type="tel"
            placeholder="| Номер телефона"
            id="input_phone_number"
            required
          />
        </div>
      </div>
      <div class="section_comment_for_the_order">
        <div class="head_order">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 20C18.0751 20 23 15.9706 23 11C23 6.02944 18.0751 2 12 2C5.92487 2 1 6.02944 1 11C1 12.9267 1.73994 14.7119 3 16.1759C3 16.1759 3.5 19.3865 2 22C6 22 8 19.3865 8 19.3865C9.23973 19.7826 10.5888 20 12 20ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12ZM12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12ZM17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11Z"
              fill="var(--general_font_color)"
            ></path></svg
          >| Комментарий к заказу
        </div>
        <textarea placeholder="..." class="comment_for_the_order"></textarea>
      </div>
      <div class="button_clear_order_configurate">Сбросить настройки заказа</div>
      <div class="button_place_an_order">Оформить заказ</div>
    </div>

    `;
  makeSmoothAnimation(cartModal);
  parentHTML.appendChild(cartModal);

  return cartModal;
};

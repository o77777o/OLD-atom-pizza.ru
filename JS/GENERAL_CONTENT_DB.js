const API_URL = 'https://api.atom-pizza.ru';

//Время начала работы ресторана (указывать только часы)
let TIME_START = 0;

//Время окончания работы ресторана (указывать только часы)
let TIME_END = 0;

//ПРИЕМ ЗАКАЗОВ true=работает по расписанию. false=всегда не работает (Менять на false, если заказы ставим на стоп.)
let POWER_BUTTON = true;

//Минимальная сумма заказа.
let MIN_ORDER_PRICE = 1300;

let menuPosition = [];
let extraItems = [];
let sliderPhotos = [];

const getAllDataFromApi = async () => {
  const requestForMenu = await fetch(`${API_URL}/api/front/cards`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!requestForMenu.ok) {
    alert('Системная ошибка');
    return;
  }

  menuPosition = await requestForMenu.json();
  createSiteMenu(menuPosition);

  const requestForExtra = await fetch(`${API_URL}/api/front/extra-products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!requestForExtra.ok) {
    alert('Системная ошибка');
    return;
  }

  extraItems = await requestForExtra.json();

  const requestForSliderPhotos = await fetch(
    `${API_URL}/api/front/slider-photos`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!requestForSliderPhotos.ok) {
    alert('Системная ошибка');
    return;
  }

  sliderPhotos = await requestForSliderPhotos.json();
  createSlider();

  const requestForConfiguration = await fetch(
    `${API_URL}/api/front/cofiguration`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!requestForConfiguration.ok) {
    alert('Системная ошибка');
    return;
  }

  const data = await requestForConfiguration.json();

  TIME_START = +(data.find((item) => item.option === 'TIME_START') || {}).value;
  TIME_END = +(data.find((item) => item.option === 'TIME_END') || {}).value;
  MIN_ORDER_PRICE = +(
    data.find((item) => item.option === 'MIN_ORDER_PRICE') || {}
  ).value;

  POWER_BUTTON =
    (data.find((item) => item.option === 'POWER_BUTTON') || {}).value ===
    'true';
  initNavigation();
}

window.extraItems = extraItems;
window.menuPosition = menuPosition;

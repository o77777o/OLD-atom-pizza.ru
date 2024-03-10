const func = () => {
  let myMap = new ymaps.Map("map", {
    center: [59.985111, 30.383179], // Координаты центра карты
    zoom: 13, // Zoom
    controls: [], // Убираем кнопки управления
  });

  let deliveryZoneCoordinates = [
    [59.991592, 30.376442], // Зона доставки
    [59.992053, 30.387553],
    [59.991256, 30.388030],
    [59.988060, 30.386269],
    [59.986369, 30.391795],
    [59.988291, 30.394320],
    [59.983448, 30.424395],
    [59.972204, 30.412353],
    [59.968630, 30.410738],
    [59.971598, 30.397775],
    [59.974134, 30.390009],
    [59.975109, 30.383715],
    [59.977956, 30.367449],
    [59.984059, 30.362276],
    [59.985545, 30.364404],
    [59.987404, 30.366452],

    
  ];

  let fixedPlacemark = new ymaps.Placemark(
    [59.985111, 30.383179],
    {
      iconCaption: 'Пиццерия "Atomic Pizza"', // Подпись метки
    },
    {}
  );

  myMap.geoObjects.add(fixedPlacemark);

  // Создаем многоугольник на основе координат зоны доставки
  let myDeliveryZone = new ymaps.Polygon(
    [deliveryZoneCoordinates],
    {
      hintContent: "Заказ от 1100₽",
    },
    {
      fillColor: "#fc471090",
      strokeColor: "#fc471090",
      strokeWidth: 2,
    }
  );

  // Добавляем многоугольник на карту
  myMap.geoObjects.add(myDeliveryZone);

  // Добавляем управление для автозаполнения
  let suggestView = new ymaps.SuggestView("addressInput");

  let myPlacemark; // Объявляем переменную для метки

  suggestView.events.add("select", (e) => {
    let addressInputHTML = document.querySelector("#addressInput");
    let selectedItem = e.get("item");
    let request = selectedItem.displayName;

    // Проводим геокодирование выбранного адреса
    ymaps.geocode(request).then(
      (res) => {
        let firstGeoObject = res.geoObjects.get(0);
        // Удаляем старую метку
        if (myPlacemark) {
          myMap.geoObjects.remove(myPlacemark);
        }

        // Проверяем, если адрес находится внутри зоны доставки
        let addressCoordinates = firstGeoObject.geometry.getCoordinates();
        let isInsideDeliveryZone =
          myDeliveryZone.geometry.contains(addressCoordinates);

        if (!isInsideDeliveryZone) {
          // Если адрес находится за пределами зоны, меняем значение в поле input
          addressInputHTML.value = "(Вне зоны доставки) " + request;
          addressInputHTML.style.border = "1px solid var(--general_red_color)";
          addressInputHTML.style.outline = "1px solid var(--general_red_color)";
        } else {
          // Устанавливаем новую метку
          addressInputHTML.style.border = "1px solid var(--general_green_color";
          addressInputHTML.style.outline =
            "1px solid var(--general_green_color";
          myPlacemark = new ymaps.Placemark(
            addressCoordinates,
            {
              iconCaption: firstGeoObject.getAddressLine(),
            },
            {
              preset: "islands#redDotIconWithCaption",
            }
          );

          // Добавляем метку на карту
          myMap.geoObjects.add(myPlacemark);
          // Отцентрируем карту по установленной метке
          myMap.setCenter(addressCoordinates, 17);
        }
      },
      (err) => {
        console.log("Ошибка: " + err);
      }
    );
  });
};

//Адрес Пиццерии
const getPizzeriaAddress = () => {
  let fixedMap = new ymaps.Map("fixed-map", {
    center: [59.985111, 30.383179], // Координаты центра карты
    zoom: 17, // Zoom
    controls: [], // Убираем кнопки управления
  });

  let fixedPlacemark = new ymaps.Placemark(
    [59.985111, 30.383179],
    {
      iconCaption: 'Пиццерия "Atomic Pizza"', // Подпись метки
    },
    {}
  );

  fixedMap.geoObjects.add(fixedPlacemark);
};

//Точка входа корзины
const initYmapsCart = () => {
  ymaps.ready(func);
};

//Точка входа контактной информации

const initYmapsContactInfo = () => {
  ymaps.ready(getPizzeriaAddress);
};

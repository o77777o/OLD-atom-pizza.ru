const func = () => {
  let myMap = new ymaps.Map("map", {
    center: [59.984272, 30.39355],
    zoom: 15,
    controls: [], // Убираем кнопки управления
  });

  let deliveryZoneCoordinates = [
    [59.98816, 30.394419], // Зона доставки
    [59.983392, 30.424227],
    [59.975033, 30.415528],
    [59.979407, 30.382341],
    [59.985449, 30.36457],
    [59.991361, 30.375968],
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
      hintContent: "Зона доставки от 1100₽",
    },
    {
      fillColor: "#60b51580",
      strokeColor: "#60b51580",
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
          myMap.setCenter(addressCoordinates, 15);
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

//Точка входа
const initYmaps = () => {
  ymaps.ready(func);
};

ymaps.ready(getPizzeriaAddress);

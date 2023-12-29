ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map("map", {
    center: [59.984272, 30.39355], // Центр карты, координаты можно подставить в соответствии с вашими потребностями
    zoom: 15, // Уровень масштабирования
  });

  let deliveryZoneCoordinates = [
    [59.98816, 30.394419], // Зона доставки
    [59.983392, 30.424227],
    [59.975033, 30.415528],
    [59.979407, 30.382341],

    [59.985449, 30.36457],
    [59.991361, 30.375968],
  ];

  let myDeliveryZone = new ymaps.Polygon(
    [deliveryZoneCoordinates],
    {
      hintContent: "Зона доставки",
    },
    {
      fillColor: "#e65d5180",
      strokeColor: "#e65d5180",
    }
  );

  myMap.geoObjects.add(myDeliveryZone);
  myMap.hint.open([59.984272, 30.39355], "Зона доставки", {
    maxwidth: 250,
  });
}


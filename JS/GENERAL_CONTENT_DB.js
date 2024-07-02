//Время начала работы ресторана (указывать только часы)
const TIME_START = 11;

//Время окончания работы ресторана (указывать только часы)
const TIME_END = 1;

//ПРИЕМ ЗАКАЗОВ true=работает по расписанию. false=всегда не работает (Менять на false, если заказы ставим на стоп.)
const POWER_BUTTON = true;

//Минимальная сумма заказа.
const MIN_ORDER_PRICE = 1300;

//Все позиции меню
const menuPosition = [
  // САЛАТЫ
  {
    type: "Салат",
    name: "Цезарь-курица",
    photo: "./img_product/Салат цезарь курица.jpg",
    base: "",
    ingredients:
      "Листья салата айсберг и ромейн, черри, соус Цезарь, курочка , пармезан, сухарики",
    diameter: "",
    weight: 350,
    price: 500,
    ID: "4e029697-e8a5-478d-9a01-f08602577c86",
    extra: [],
  },
  {
    type: "Салат",
    name: "Цезарь-креветки",
    photo: "./img_product/Салат цезарь креветки.jpg",
    base: "",
    ingredients:
      "Листья салата айсберг и ромейн, черри, соус Цезарь, креветки , пармезан, сухарики",
    diameter: "",
    weight: 350,
    price: 650,
    ID: "111eb448-29fc-431d-8340-faa7466d669f",
    extra: [],
  },
  // РОЛЛ
  // {
  //   type: "Ролл",
  //   name: "Сендвич с Пепперони",
  //   photo: "./img_product/Ролл сендвич с Пепперони.jpg",
  //   base: "",
  //   ingredients:
  //     "Лаваш, Халапеньо, салат айсберг, томат, фирменный соус, пепперони, кетчуп, моцарелла",
  //   diameter: "",
  //   weight: 350,
  //   price: 399,
  //   ID: "fe7139a1-e1b3-49d2-b413-6d782639a651",
  //   extra: [],
  // },
  // {
  //   type: "Ролл",
  //   name: "Сендвич с курицей",
  //   photo: "./img_product/Ролл сендвич с курицей.jpg",
  //   base: "",
  //   ingredients:
  //     "Лаваш, соус фирменный, салат айсберг, курица, пармезан, томат ",
  //   diameter: "",
  //   weight: 350,
  //   price: 399,
  //   ID: "671b4d16-ff8b-4e9a-a94e-f9b057ebc63c",
  //   extra: [],
  // },
  // {
  //   type: "Ролл",
  //   name: "Сендвич с креветками",
  //   photo: "./img_product/Ролл сендвич с креветками.jpg",
  //   base: "",
  //   ingredients:
  //     "Лаваш, салат ромейн, томат, креветки тигровые, пармезан, соус фирменный",
  //   diameter: "",
  //   weight: 250,
  //   price: 599,
  //   ID: "74b040fc-1438-4e8d-8d09-1cd17811d3ae",
  //   extra: [],
  // },
  // ПИЦЦА
  {
    type: "Пицца",
    name: "Буритто",
    photo: "./img_product/logobig.jpg",
    base: "томатная основа",
    ingredients:
      "Моцарелла, курочка, томатный соус, болгарский перец, лук, кукуруза, зелень, лёгкая пикантность",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "b3e0508c-070e-4120-8aa0-dc385fddc54e",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Ветчина и грибы",
    photo: "./img_product/Ветчина и грибы.jpg",
    base: "томатная основа",
    ingredients: "Томатная основа, моцарелла, ветчина, грибы, зелень",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "ab827436-2162-453f-b3d0-dd15b1a48c99",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Диабло",
    photo: "./img_product/Диабло.jpg",
    base: "томатная основа",
    ingredients:
      "Томатный соус, моцарелла, говядина, бекон, перец болгарский, лук",
    diameter: "30 см",
    weight: 600,
    price: 700,
    ID: "88e3933a-c91d-44cc-95b6-99f451724217",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Друзья Ариэль",
    photo: "./img_product/Друзья Ариэль.jpg",
    base: "сливочная основа",
    ingredients:
      "Соус бешамель, моцарелла, тигровые креветки, мидии, гребешок, руккола, парmезан",
    diameter: "30 см",
    weight: 600,
    price: 1000,
    ID: "aafabc9d-ddb3-4d9c-b95b-822d0774d6db",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Гавайская",
    photo: "./img_product/Гавайская.jpg",
    base: "томатная основа",
    ingredients: "Соус фирменный, моцарелла, курица, ананас, пармезан",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "cbffdd2f-ab26-4c14-873f-4ca97e5722e1",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Грибная",
    photo: "./img_product/logobig.jpg",
    base: "томатная основа",
    ingredients:
      "Шампиньоны, томатный соус (бешамель на выбор), моцарелла, соус унаги, парmезан, руккола",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "9bd2adff-3d6f-440c-9991-3591cc39fa8d",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Креветки-томаты",
    photo: "./img_product/logobig.jpg",
    base: "томатная основа",
    ingredients:
      "Моцарелла, томатный соус, тигровые креветки, томаты, салат, парmезан",
    diameter: "30 см",
    weight: 600,
    price: 800,
    ID: "92848fc1-baa3-4965-9444-57da59e88d62",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Курица-грибы",
    photo: "./img_product/Курица-грибы.jpg",
    base: "томатная основа",
    ingredients: "Томатная основа, моцарелла, грибы, курочка, зелень",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "960f8754-454c-4873-9b62-02e2591d4a2e",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Марго",
    photo: "./img_product/Марго.jpg",
    base: "томатная основа",
    ingredients: "Томатная основа, моцарелла, томаты, зелень",
    diameter: "30 см",
    weight: 600,
    price: 500,
    ID: "42a38cc0-3f29-4bd4-8318-49625a658663",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Мидийность",
    photo: "./img_product/logobig.jpg",
    base: "сливочная основа",
    ingredients:
      "Соус бешамель, моцарелла, чеснок, соус унаги, мидии, вяленный томат, руккола, парmезан",
    diameter: "30 см",
    weight: 600,
    price: 650,
    ID: "c4eb7396-c242-4eb9-9972-f5feab86db38",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Охотничья",
    photo: "./img_product/Охотничья.jpg",
    base: "томатная основа",
    ingredients:
      "Томатная основа, моцарелла, колбаски, корнишоны, перец сладкий, лук",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "a646c5cc-420a-4118-a15e-943e66b08895",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Пармская",
    photo: "./img_product/logobig.jpg",
    base: "сливочная основа",
    ingredients:
      "Соус бешамель, томаты черри, пармская ветчина, черный перец, руккола, парmезан",
    diameter: "30 см",
    weight: 600,
    price: 750,
    ID: "b9398c4c-08b5-4e46-b168-f916625327ba",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Пепперони",
    photo: "./img_product/logobig.jpg",
    base: "томатная основа",
    ingredients: "Томатная основа, моцарелла, томат, пепперони, зелень",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "462b0d94-0fdf-4a69-886e-a832fe55e7f2",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Солянка",
    photo: "./img_product/Солянка.jpg",
    base: "томатная основа",
    ingredients:
      "Томатная основа, моцарелла, бекон, курочка с/к, охотничья колбаска, перец болгарский, каперсы, маслины, чеснок, зелень",
    diameter: "30 см",
    weight: 600,
    price: 650,
    ID: "903fe182-17a8-4d8e-bbe8-ce3acb8e0aeb",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Сырная груша",
    photo: "./img_product/Сырная груша.jpg",
    base: "сливочная основа",
    ingredients: "Соус бешамель, груша, Блю-чиз, моцарелла, миндаль, парmезан",
    diameter: "30 см",
    weight: 600,
    price: 700,
    ID: "4896acc7-2208-4b78-9fa9-b12395e25e7e",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Сёмга сливочная",
    photo: "./img_product/Сёмга сливочная.jpg",
    base: "сливочная основа",
    ingredients: "Соус бешамель, моцарелла, сёмга, руккола, парmезан",
    diameter: "30 см",
    weight: 600,
    price: 800,
    ID: "0770c19a-f64d-4c4e-9c0a-192bb84c249f",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Том Ям",
    photo: "./img_product/Том Ям.jpg",
    base: "паста Том Ям",
    ingredients:
      "Острый соус Том Ям (бешамель на выбор) бекон, парmезан, моцарелла, зелень",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "643f82e4-3d9f-4b5a-bdfc-cf11db705d84",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Цезарь-курица",
    photo: "./img_product/Цезарь-курица.jpg",
    base: "сливочная основа",
    ingredients: "Соус цезарь, моцарелла, черри, курочка, ромейн, парmезан",
    diameter: "30 см",
    weight: 600,
    price: 700,
    ID: "346082b4-e5af-4d91-8ca4-8097cf1b340c",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Цезарь-креветки",
    photo: "./img_product/Цезарь-креветки.jpg",
    base: "сливочная основа",
    ingredients: "Соус цезарь, моцарелла, черри, креветки, ромейн, парmезан",
    diameter: "30 см",
    weight: 600,
    price: 850,
    ID: "0f61615e-28d5-4527-8123-19d62c05dd0b",
    extra: [],
  },
  {
    type: "Пицца",
    name: "Четыре сыра",
    photo: "./img_product/Четыре сыра.jpg",
    base: "сливочная основа",
    ingredients: "Соус бешамель, моцарелла, чеддар, блю чиз, парmезан",
    diameter: "30 см",
    weight: 600,
    price: 700,
    ID: "b031f7d2-bcfc-408e-ac28-d3311dbcc2f7",
    extra: [],
  },
];
// все допы для пиццы
const extraItems = [
  {
    name: "Острый халапеньо",
    price: 39,
  },
  {
    name: "Моцарелла",
    price: 119,
  },
  {
    name: "Блю Чиз",
    price: 119,
  },
  {
    name: "Пармезан",
    price: 74,
  },
  {
    name: "Бекон",
    price: 74,
  },
  {
    name: "Соус Шрирача",
    price: 39,
  },
  {
    name: "Соус Унаги",
    price: 39,
  },
];

const reserv = [];

window.extraItems = extraItems;
window.menuPosition = menuPosition;

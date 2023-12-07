const pizzas = [
  {
    name: "Буритто, томатная основа",
    photo: "./img_product/example.jpg",
    ingredients:
      "моцарелла, курочка, томатный соус, болгарский перец, лук, кукуруза, зелень, лёгкая пикантность",
    diameter: "30 см",
    weight: 600,
    price: 550,
    ID: "b3e0508c-070e-4120-8aa0-dc385fddc54e",
  },
  {
    name: "Ветчина грибы, томатная основа",
    photo: "./img_product/example.jpg",
    ingredients: "томатная основа, моцарелла, ветчина, грибы, зелень",
    diameter: "30 см",
    weight: 600,
    price: 500,
    ID: "ab827436-2162-453f-b3d0-dd15b1a48c99",
  },
  {
    name: "Гавайская, томатная основа",
    photo: "./img_product/example.jpg",
    ingredients: "соус фирменный, моцарелла, курица, ананас, пармезан",
    diameter: "30 см",
    weight: 600,
    price: 500,
    ID: "cbffdd2f-ab26-4c14-873f-4ca97e5722e1",
  },
  {
    name: "Грибная, томатная основа",
    photo: "./img_product/example.jpg",
    ingredients:
      "шампиньоны, томатный соус (бешамель на выбор), моцарелла, соус унаги, пармезан, руккола",
    diameter: "30 см",
    weight: 600,
    price: 500,
    ID: "9bd2adff-3d6f-440c-9991-3591cc39fa8d",
  },
  {
    name: "Друзья Ариель, сливочная основа",
    photo: "./img_product/example.jpg",
    ingredients:
      "с-с бешамель, моцарелла, тигровые креветки, мидии, гребешок, руккола, парmезан",
    diameter: "30 см",
    weight: 600,
    price: 800,
    ID: "aafabc9d-ddb3-4d9c-b95b-822d0774d6db",
  },
  {
    name: "Дьябло, томатмная основа",
    photo: "./img_product/example.jpg",
    ingredients:
      "томатный соус, моцарелла, говядина, бекон, перец болгарский, лук",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "88e3933a-c91d-44cc-95b6-99f451724217",
  },
  {
    name: "Креветки, томатная основа",
    photo: "./img_product/example.jpg",
    ingredients:
      "моцарелла, томатный соус, тигровые креветки, томаты, салат, пармезан",
    diameter: "30 см",
    weight: 600,
    price: 650,
    ID: "92848fc1-baa3-4965-9444-57da59e88d62",
  },
  {
    name: "Курица-грибы, томатная основа",
    photo: "./img_product/example.jpg",
    ingredients: "томатная основа, моцарелла, грибы, курочка, зелень",
    diameter: "30 см",
    weight: 600,
    price: 500,
    ID: "960f8754-454c-4873-9b62-02e2591d4a2e",
  },
  {
    name: "Марго, томатная основа",
    photo: "./img_product/example.jpg",
    ingredients: "томатная основа, моцарелла, томаты, зелень",
    diameter: "30 см",
    weight: 600,
    price: 450,
    ID: "42a38cc0-3f29-4bd4-8318-49625a658663",
  },
  {
    name: "Мидийность, сливочная основа",
    photo: "./img_product/example.jpg",
    ingredients:
      "с-с бешамель, моцарелла, чеснок, соус унаги, мидии, вяленный томат, руккола, пармезан",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "c4eb7396-c242-4eb9-9972-f5feab86db38",
  },
  {
    name: "Охотничья, томатная основа",
    photo: "./img_product/example.jpg",
    ingredients:
      "томатная основа, моцарелла, колбаски, корнишоны, перец сладкий, лук",
    diameter: "30 см",
    weight: 600,
    price: 500,
    ID: "a646c5cc-420a-4118-a15e-943e66b08895",
  },
  {
    name: "Пепперони, томатная основа",
    photo: "./img_product/example.jpg",
    ingredients: "томатная основа, моцарелла, томат, пепперони, зелень",
    diameter: "30 см",
    weight: 600,
    price: 500,
    ID: "462b0d94-0fdf-4a69-886e-a832fe55e7f2",
  },
  {
    name: "Солянка, томатная основа",
    photo: "./img_product/example.jpg",
    ingredients:
      "томатная основа, моцарелла, бекон, курочка с/к, охотничья колбаска, перец болгарский, каперсы, маслины, чеснок, зелень",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "903fe182-17a8-4d8e-bbe8-ce3acb8e0aeb",
  },
  {
    name: "Сырная груша, сливочная основа",
    photo: "./img_product/example.jpg",
    ingredients: "груша, Блю-чиз, моцарелла, бешамель, миндаль, пармезан",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "4896acc7-2208-4b78-9fa9-b12395e25e7e",
  },
  {
    name: "Сёмга, сливочная основа",
    photo: "./img_product/example.jpg",
    ingredients: "моцарелла, бешамель, сёмга, руккола, пармезан",
    diameter: "30 см",
    weight: 600,
    price: 750,
    ID: "0770c19a-f64d-4c4e-9c0a-192bb84c249f",
  },
  {
    name: "Том Ям, сливочная основа",
    photo: "./img_product/example.jpg",
    ingredients:
      "сливочная основа, бекон, пармезан, соус том ям (бешамель на выбор), моцарелла, зелень",
    diameter: "30 см",
    weight: 600,
    price: 550,
    ID: "643f82e4-3d9f-4b5a-bdfc-cf11db705d84",
  },
  {
    name: "Цезарь-креветки, сливочная основа",
    photo: "./img_product/example.jpg",
    ingredients: "соус цезарь, моцарелла, черри, креветки, ромейн, пармезан",
    diameter: "30 см",
    weight: 600,
    price: 700,
    ID: "0f61615e-28d5-4527-8123-19d62c05dd0b",
  },
  {
    name: "Цезарь-курица, сливочная основа",
    photo: "./img_product/example.jpg",
    ingredients: "соус цезарь, моцарелла, черри, курочка, ромейн, пармезан",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "346082b4-e5af-4d91-8ca4-8097cf1b340c",
  },
  {
    name: "Четыре сыра, сливочная основа",
    photo: "./img_product/example.jpg",
    ingredients: "бешамель, моцарелла, чеддар, блю чиз, пармезан",
    diameter: "30 см",
    weight: 600,
    price: 600,
    ID: "b031f7d2-bcfc-408e-ac28-d3311dbcc2f7",
  },
];

window.pizzas = pizzas;

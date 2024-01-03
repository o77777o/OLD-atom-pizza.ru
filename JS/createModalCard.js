//Добавление затемнения
const createModalBackground = (parentElement) => {
  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal_background");

  parentElement.appendChild(modalBackground);
};

//Функция добавления элемента по ID в корзину и сохранения в LS
const addToCart = (modalCard) => {
  const modalCardDescriptionHTML = modalCard.children[1];
  buttonPriceModalCardHTML = modalCardDescriptionHTML.children[3];

  cardToCart(modalCard, buttonPriceModalCardHTML);
};

//Создание модального окна продукта
const createModalCard = (element) => {
  const modalCard = document.createElement("div");
  modalCard.classList.add("modal_card");
  modalCard.id = element.ID;

  modalCard.innerHTML = `
    <div class="img_modal_card">
      <img src="${element.photo}" alt="" />
    </div>
    <div class="description_modal_card">
      <div class="structure_modal_card">${element.name}, <br> ${element.base} </div>
      <div class="weight_modal_card">${element.weight} грамм, ⌀ ${element.diameter}</div>
      <div class="compound_modal_card">${element.ingredients}</div>
      <div class="button_price_modal_card">${element.price}₽</div>
    </div>
    `;

  return modalCard;
};

//Удаление затемнения и модального окна продукта
const deleteModalCard = (modalCard) => {
  const removeZone = document.querySelector(".modal_background");
  removeZone.addEventListener("click", () => {
    modalCard.remove();
    removeZone.remove();
  });
};

//Отображение по id модального окна
const openModal = (id) => {
  const element = findByID(id);
  const modalWindow = document.querySelector(".modal_window");
  const modalCard = createModalCard(element);

  createModalBackground(modalWindow);
  modalWindow.appendChild(modalCard);
  addToCart(modalCard);
  deleteModalCard(modalCard);
};

//Точка входа, навесить click на img в product_card
const initModal = () => {
  const productCardHTML = document.querySelectorAll(".product_card");

  for (const product of productCardHTML) {
    const buttonOpenModal = product.children[0];

    buttonOpenModal.addEventListener("click", () => {
      openModal(product.id);
    });
  }
};


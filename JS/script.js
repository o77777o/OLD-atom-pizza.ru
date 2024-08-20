window.onload = async () => {
  await getAllDataFromApi();
  initModal();
  initCart();
  initUserConfigurate();
  initButtonOpenContactInfo();
  initButtonOpenCart();
  initButtonOpenDeliveryModal();
  initFooter();
};

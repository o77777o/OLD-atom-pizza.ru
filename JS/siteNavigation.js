const scrollToTop = () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//Подняться наверх
const getToTop = () => {
  const pushToTop = document.querySelector(".fixed_logo");

  addClick(pushToTop, scrollToTop);
};

//Точка входа
const initNavigation = () => {
  getToTop();
};

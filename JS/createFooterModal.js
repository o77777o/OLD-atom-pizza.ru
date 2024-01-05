const getCurrentYear = () => {
  const authorshipHTML = document.querySelector(".authorship");
  const currentYear = new Date().getFullYear();

  authorshipHTML.innerHTML = `©${currentYear} Atomic Pizza`;
};


const initFooter = () => {
  getCurrentYear();
};

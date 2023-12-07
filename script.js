document.querySelector(".stt").onclick = scrollToTopBtn;
function scrollToTopBtn() {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const scrollToTopEL = document.querySelector(".stt");
document.addEventListener("scroll", () => {
  window.scrollY >= 165
    ? scrollToTopEL.classList.remove("upward")
    : scrollToTopEL.classList.add("upward");
});

const InvisibleLoadingEL = document.querySelector(".stt.upward");
document.addEventListener("scroll", () => {
  if (window.scrollY >= 150) {
    InvisibleLoadingEL.removeAttribute("style");
  }
});

// const HeadGroupEL = document.querySelector(".HeadGroup");
// document.addEventListener("scroll", () => {
//   console.log(window.scrollY);
//   window.scrollY >= 430
//     ? (HeadGroupEL.classList.add = "fixed")
//     : (HeadGroupEL.classList.remove = "static");
// });


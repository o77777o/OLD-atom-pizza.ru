const createSlider = () => {
  const sliderCreate = document.querySelector(".slider-create");

  const slider = document.createElement("div");
  slider.classList.add("swiper", "mySwiper");

  slider.innerHTML = `
      <div class="swiper-wrapper">
        ${sliderPhotos.map((el) => {
          return `<div class="swiper-slide">
            <img src="${el.photo_link}" alt="" />
          </div>`;
        })}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    `;

  sliderCreate.appendChild(slider);

  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

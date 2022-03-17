var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    cssMode: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
  });
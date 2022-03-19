var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
  });
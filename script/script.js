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

let bars = document.querySelector('.fa-bars').addEventListener('click', () => {
  let menu = document.querySelector('.cabecalho-menuParaCelular-hidden').classList.toggle('cabecalho-menuParaCelular');
})
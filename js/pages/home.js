// BANNERS
new Swiper(".home__banners .swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".home__banners .swiper-pagination",
    clickable: true,
    renderBullet(index, cls) {
      return `<span class="${cls}">${index + 1 < 9 ? "0" : ""}${index + 1}<div></div></span>`
    }
  }
})
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

// PROJETS
const buttons = document.querySelectorAll("[data-projects]")
const modal = document.querySelector(".home__projects__modal")
const close = modal.querySelector("[data-close]")
const prev = modal.querySelector("[data-prev]")
const next = modal.querySelector("[data-next]")
const image = modal.querySelector("figure img")
const caption = modal.querySelector("h6")
const pagination = modal.querySelector("p")

let images = []
let index = 0

buttons.forEach(button => {
  button.addEventListener("click", () => {
    modal.classList.add("open")
    document.documentElement.classList.add("o-hidden")
  })
})

close.addEventListener("click", () => {
  modal.classList.remove("open")
  document.documentElement.classList.remove("o-hidden")
})

function changeImage() {
  image.src = images[index].src
  caption.innerHTML = images[index].caption
}

function changePagination() {
  pagination.innerHTML = `<strong>${index + 1}</strong> / ${images.length}`
}

next.addEventListener("click", () => {
  index === images.length - 1 ? index = 0 : index++
  changeImage()
  changePagination()
})

prev.addEventListener("click", () => {
  index === 0 ? index = images.length - 1 : index--
  changeImage()
  changePagination()
})
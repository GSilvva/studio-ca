//NAV
const nav = document.querySelector(".nav")

nav.querySelector(".nav button").addEventListener("click", () => {
    nav.classList.toggle("nav--open")
    document.documentElement.classList.toggle("o-hidden")
})

nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("nav--open")
  document.documentElement.classList.remove("o-hidden")
}))

Array.from(["DOMContentLoaded", "scroll", "load"]).forEach(event => window.addEventListener(event, () => {
    document.body.scrollTop > 8 || document.documentElement.scrollTop > 8 ? nav.classList.add("nav--fixed") : nav.classList.remove("nav--fixed")
}))

// COOKIES
const cookies = document.querySelector(".cookies");

cookies.querySelector("button").addEventListener("click", () => {
  cookies.classList.remove("cookies--open")
  localStorage.setItem("lgpd", true)
})

window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("lgpd")) cookies.classList.add("cookies--open")
})
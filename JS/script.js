const btn = document.querySelector("#menu-btn");
const iconOpen = document.querySelector("#menu-btn img");
const iconClose = document.querySelector("#menu-btn img:last-of-type");
const menu = document.querySelector("#menu");

btn.addEventListener('click', () => {
   iconClose.classList.toggle("hidden");
   iconOpen.classList.toggle("hidden");
   menu.classList.toggle("hidden");
   menu.classList.toggle("flex");
})
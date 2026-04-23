const hamBtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("show");
    navBar.classList.toggle("show");
});
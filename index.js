const mobileMenu = document.querySelector(".mobile-menu");
const menuItems = document.querySelectorAll(".mobile-menu-item");
const burgerMenuIcon = document.querySelector(".burger-menu");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
    if (mobileMenu.classList.contains("showMenu")) {
        mobileMenu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        mobileMenu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

burgerMenuIcon.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)
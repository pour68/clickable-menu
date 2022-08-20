const navItems = document.querySelectorAll(".nav__item");

function activeLink() {
  navItems.forEach((item) => {
    item.classList.remove("nav__item--active");
    this.classList.add("nav__item--active");
  });
}

navItems.forEach((navItem) => navItem.addEventListener("click", activeLink));

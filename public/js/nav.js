function initNav() {
  let el = document.getElementById("divd-main-nav");
  //console.log("check", el);
  let subNav = document.getElementById("divd-sub-nav");

  let menuOpen = false;

  let items = el.querySelectorAll(".main-nav-item");
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      if (menuOpen) {
        subNav.classList.remove("active");
        menuOpen = false;
      } else {
        subNav.classList.add("active");
        menuOpen = true;
      }
    });
  });
}

initNav();

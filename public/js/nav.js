function initNav() {
  console.log("init nav");
  let el = document.getElementById("divd-main-nav");
  console.log("check nav", el);
  let subNav = document.getElementById("divd-sub-nav");
  console.log("check sub nav", subNav);
  let menuOpen = false;

  function clickItem(e) {
    console.log("Item clicked");
    e.preventDefault();
    if (menuOpen) {
      subNav.classList.remove("active");
      menuOpen = false;
    } else {
      subNav.classList.add("active");
      menuOpen = true;
    }
  }

  let items = el.querySelectorAll(".main-nav-item");
  items.forEach((item) => {
    item.addEventListener("click", clickItem);
  });
}

initNav();

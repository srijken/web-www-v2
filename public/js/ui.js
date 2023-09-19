function initUI() {
  let carouselElements = document.querySelectorAll(".carousel");
  carouselElements.forEach((el) => initCarousel(el));

  let accordionElements = document.querySelectorAll(".accordion");
  accordionElements.forEach((el) => initAccordion(el));
}

function initCarousel(el) {
  let index = 0;
  let pageCount = 0;

  let slides = el.querySelectorAll(".slides");
  let pageCountContainer = el.querySelector(".page-count");
  let slidesContainer = slides.length ? slides[0] : null;
  if (slidesContainer) {
    pageCount = slidesContainer.children.length;
  }

  function setPageCounter(n) {
    if (pageCountContainer) {
      pageCountContainer.innerHTML = `${n} / ${pageCount}`;
    }
  }

  function nextPage() {
    if (index < pageCount - 1) {
      index++;
      let left = slidesContainer.children[index].offsetLeft;
      smoothScroll(left, slidesContainer);
    } else {
      index = 0;
      let left = slidesContainer.children[index].offsetLeft;
      smoothScroll(left, slidesContainer);
    }
    setPageCounter(index + 1);
  }

  function prevPage() {
    if (index > 0) {
      index--;
      let left = slidesContainer.children[index].offsetLeft;
      smoothScroll(left, slidesContainer);
    } else {
      index = pageCount - 1;
      let left = slidesContainer.children[index].offsetLeft;
      smoothScroll(left, slidesContainer);
    }
    setPageCounter(index + 1);
  }

  let buttons = el.querySelectorAll(".pages button");
  if (buttons.length === 2) {
    buttons[0].addEventListener("click", prevPage);
    buttons[1].addEventListener("click", nextPage);
  }
}

function initAccordion(el) {
  let items = el.querySelectorAll(".accordion-item");

  function toggleItem(itemEl) {
    items.forEach((item) => {
      item.classList.remove("active");
    });
    itemEl.classList.add("active");
  }

  items.forEach((item) => {
    item.addEventListener("click", () => {
      toggleItem(item);
    });
  });
}

function smoothScroll(targetScroll, el) {
  const startScroll = el.scrollLeft;
  const distance = targetScroll - startScroll;
  const startTime = new Date().getTime();

  function animate() {
    const currentTime = new Date().getTime();
    const timePassed = currentTime - startTime;
    const duration = 300; // Animation duration in ms

    // Calculate the easing (you can replace this with other easing functions)
    const easing = (t) => t * t; // simple quadratic easing
    const progress = Math.min(timePassed / duration, 1);

    el.scrollLeft = startScroll + distance * easing(progress);

    if (progress < 1) {
      window.requestAnimationFrame(animate);
    }
  }

  window.requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", function () {
  // Your code here will run after the document is fully parsed.
  initUI();
});

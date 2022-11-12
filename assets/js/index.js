//Carousal Logic
const carousalBtns = document.querySelectorAll(".carousal-btns span");

const removeActiveClass = (eles) => {
  eles.forEach((item) => item.classList.remove("active"));
};

const carousal = (e) => {
  const activeCarousal = document.querySelector(".testimonial-card.active");
  if (e.target.classList.contains("next")) {
    if (activeCarousal.nextElementSibling) {
      //remove old class
      activeCarousal.classList.remove("active");
      activeCarousal.nextElementSibling.classList.remove("next");
      //add new class
      activeCarousal.classList.add("last");
      activeCarousal.nextElementSibling.classList.add("active");
      removeActiveClass(carousalBtns);
      e.target.classList.add("active");
    }
  } else {
    if (activeCarousal.previousElementSibling) {
      //remove old class
      activeCarousal.classList.remove("active");
      activeCarousal.previousElementSibling.classList.remove("last");
      //add new class
      activeCarousal.classList.add("next");
      activeCarousal.previousElementSibling.classList.add("active");
      removeActiveClass(carousalBtns);
      e.target.classList.add("active");
    }
  }
};

carousalBtns.forEach((item) => {
  item.addEventListener("click", carousal);
});

// Add active class to current nav link
let navlinks = document.querySelectorAll(".nav-item a");
navlinks = [...navlinks].filter((link) => link.dataset.name);
const navItems = document.querySelectorAll(".nav-item");
const pagesName = [
  "index",
  "about",
  "accomodation",
  "gallery",
  "blog",
  "contact",
];

window.addEventListener("DOMContentLoaded", () => {
  const currentPage = pagesName.find((link) => {
    if (window.location.href.indexOf(link) > 0) {
      return link;
    }
  });
  //remove active clsass from nav Items
  navItems.forEach((item) => item.classList.remove("active"));

  //add active class to current active page
  if (!currentPage) {
    navlinks[0].parentElement.classList.add("active");
  } else {
    navlinks.forEach((item) => {
      if (item.dataset.name === currentPage) {
        if (currentPage === "blog") {
          item.parentElement.parentElement.parentElement.classList.add(
            "active"
          );
        } else {
          item.parentElement.classList.add("active");
        }
      }
    });
  }
});

//Toggle menu
const menuIcon = document.querySelector(".logo span");
const dropDownMenu = document.querySelector(".nav-list");

menuIcon.addEventListener("click", () => {
  if (dropDownMenu.classList.contains("show")) {
    dropDownMenu.style.height = "";
    dropDownMenu.classList.remove("show");
    return;
  }
  const height = dropDownMenu.scrollHeight;
  dropDownMenu.style.height = `${height}px`;
  dropDownMenu.classList.add("show");
});

// Close Nav Menu in Bigger Screen
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    dropDownMenu.style.height = "";
    dropDownMenu.classList.remove("show");
  }
});

//Fixed Nav Bar
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.pageYOffset > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

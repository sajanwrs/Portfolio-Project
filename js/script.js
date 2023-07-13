// window.addEventListener("scroll", function () {
//   var navi = document.querySelector("nav");
//   navi.classList.toggle("sticky", window.scrollY > 0);
// });

// Script for scrolling to the specified section
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//Fix for navbar overlapping problem
const navHeight = Math.floor(
  document.querySelector(".container-nav").offsetHeight
);

document.documentElement.style.setProperty(
  "--scroll-padding",
  navHeight + "px"
);

//ABout Me

const e = document.getElementById("my-bio");

const file = "../assets/about.txt";

const reader = new FileReader("../assets/about.txt");

console.log(reader);

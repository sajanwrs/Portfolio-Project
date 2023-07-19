// window.addEventListener("scroll", function () {
//   var navi = document.querySelector("nav");
//   navi.classList.toggle("sticky", window.scrollY > 0);
// });

// Script for scrolling to the specified section
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

// Script for scrolling to the specified section
const navItems = document.querySelectorAll(".container-nav a");

navItems.forEach((anchor) => anchor.addEventListener("click", smoothScroll));

function smoothScroll(ev) {
  ev.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}

// const navItems = document.querySelectorAll(".container-nav a");

// navItems.forEach((e) => e.addEventListener("click", smoothScroll));

// function smoothScroll(ev) {
//   ev.preventDefault();

//   const target = ev.currentTarget.getAttribute("href");
//   window.scrollTo({
//     top: document.querySelector(target).offsetTop,
//     behavior: "smooth",
//   });
// }

//Fix for navbar overlapping problem
const navHeight = Math.floor(
  document.querySelector(".container-nav").offsetHeight
);

document.documentElement.style.setProperty(
  "--scroll-padding",
  navHeight + "px"
);

//About Me

const e = document.getElementById("bio-text");

const bio =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eum tempora ratione consequatur doloribus, aperiam alias laborum enim excepturi culpa officia, ea quisquam a voluptates, esse beatae molestias delectus corporis.";

e.append(bio);

//RESUME reader script

const url =
  "https://drive.google.com/file/d/1dmxxe6ypx4ovj4smt5RMXzd_Ae1KddbO/preview";

function resumeReader() {
  window.open(url, "_blank");
}

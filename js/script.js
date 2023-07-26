// Script for scrolling to the specified section
const navItems = document.querySelectorAll("a");

navItems.forEach((anchor) => anchor.addEventListener("click", smoothScroll));

function smoothScroll(ev) {
  ev.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}

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

// const bio =
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eum tempora ratione consequatur doloribus, aperiam alias laborum enim excepturi culpa officia, ea quisquam a voluptates, esse beatae molestias delectus corporis.";

// e.append(bio);

//RESUME reader script

const url =
  "https://drive.google.com/file/d/1dmxxe6ypx4ovj4smt5RMXzd_Ae1KddbO/preview";

function resumeReader() {
  window.open(url, "_blank");
}

// burger menu script
const mobIcon = document.querySelector("#mobile-button");

const ul = document.querySelector("nav ul");

const nav = document.querySelector("nav");

mobIcon.addEventListener("click", () => {
  ul.classList.toggle("show");
});

//To hide the menu after the link is clicked
const menu = document.querySelectorAll(".nav-item");

menu.forEach((items) => {
  items.addEventListener("click", () => {
    ul.classList.remove("show");
  });
});

//Footer year update
const year = new Date();

document.querySelector("#current-year").append(year.getFullYear());

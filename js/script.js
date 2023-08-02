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

//Project link open button
const project1 = "https://sajanwrs.github.io/Little-Lemon-Restaurant/";

const project2 = "https://sajanwrs.github.io/calculator-app/";

const project3 = "https://sajanwrs.github.io/robofriends/";

function projLinkOpener(proj) {
  if (proj == "project_1") {
    window.open(project1, "_blank");
  } else if (proj == "project_2") {
    window.open(project2, "_blank");
  } else if (proj == "project_3") {
    window.open(project3, "_blank");
  }
}

//Contact success message

document.getElementById("contact-form").addEventListener("submit", (e) => {
  //e.preventDefault(); //To prevent the form from being submitted normally

  const status = document.getElementById("status");
  status.innerText = "Thanks for getting in touch.";

  setTimeout(() => {
    status.style.opacity = "0";
  }, 4000);
});

//Social Links
const linkedin = "https://www.linkedin.com/in/md-warisur-rahman/";

const github = "https://github.com/sajanwrs";

function openLinedIn() {
  window.open(linkedin, "_blank");
}

function openGithub() {
  window.open(github, "_blank");
}

//Footer year update
const year = new Date();

document.querySelector("#current-year").append(year.getFullYear());

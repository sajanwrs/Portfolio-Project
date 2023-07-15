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

//About Me

const e = document.getElementById("bio-text");

const bio =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eum tempora ratione consequatur doloribus, aperiam alias laborum enim excepturi culpa officia, ea quisquam a voluptates, esse beatae molestias delectus corporis.";

e.append(bio);

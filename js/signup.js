"use strict";
const formControl = document.querySelector(".form-control");
const labels = document.querySelectorAll(".form-control label");

/******************* Start Responsive Navbar *******************/
const navLinks = document.querySelector(".nav-links");
const navIconBtn = document.querySelector(".nav-icon");
const main = document.querySelector("main");
navIconBtn.addEventListener("click", () => {
  if (navLinks.classList.contains("visible")) {
    navLinks.classList.remove("visible");
    navLinks.classList.add("show");
    // main.style.zIndex = "-1";
  } else {
    navLinks.classList.remove("show");
    navLinks.classList.add("visible");
    // main.style.zIndex = "5000";
  }
});
/******************* End Responsive Navbar *******************/

const signature = document.querySelector(".signature");
signature.innerHTML = `Developed by <span>❤</span> Mina`;

"use strict";
const navLinks = document.querySelector(".nav-links");
const navIconBtn = document.querySelector(".nav-icon");
const cardsContainer = document.getElementById("cards-container");
const video = document.querySelector(".vid");
const formControl = document.querySelector(".form-control");

/*Responsive Navbar*/
navIconBtn.addEventListener("click", () => {
  if (navLinks.classList.contains("visible")) {
    navLinks.classList.remove("visible");
    navLinks.classList.add("show");
  } else {
    navLinks.classList.remove("show");
    navLinks.classList.add("visible");
  }
});

/* Start Movies List form moviesDB Api*/

// Using "https://www.themoviedb.org/settings/api" to get Data for Movies.
// "https://www.themoviedb.org/documentation/api/discover"
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_video=true&api_key=acf972594b1f5f9519aa0cee9b393656&page=1";
// because we didn't have full path when we call IMG attr from obj within API.
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

//Get Intial Movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  showingMovies(data.results);
  addPosters(data.results);
}

const showingMovies = function (movies) {
  cardsContainer.innerHTML = " ";
  movies.forEach((movie, i) => {
    let str = movie.title;
    if (str.length > 18) {
      str = str.slice(0, 17) + "...";
    }
    let rateColor = "";
    if (movie.vote_average >= 8) {
      rateColor = "green";
    } else if (movie.vote_average < 8 && movie.vote_average >= 5) {
      rateColor = "orange";
    } else {
      rateColor = "red";
    }
    const cardHtml = `          
    <div class="card">
      <img class="movie-img" src="${IMAGE_PATH + movie.poster_path}" alt="${
      movie.title
    }" />
      <div class="movie-info">
        <h3 class="movie-title">${str}</h3>
        <span class="${rateColor}">${movie.vote_average}</span>
      </div>
      <button class="showtimes-btn">Showtimes</button>
    </div>`;
    cardsContainer.insertAdjacentHTML("beforeend", cardHtml);
  });
};

/* End Movies List form moviesDB Api*/

///////////////////////////////////////
// Slider
// const slider = function () {
//   const slides = document.querySelectorAll(".slide");
//   const btnLeft = document.querySelector(".slider__btn--left");
//   const btnRight = document.querySelector(".slider__btn--right");

//   let curSlide = 0;
//   const maxSlide = slides.length;

//   // Functions

//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//   };

//   // Next slide
//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }

//     goToSlide(curSlide);
//   };

//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//   };

//   const init = function () {
//     goToSlide(0);
//   };
//   init();

//   // Event handlers
//   btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", prevSlide);

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") prevSlide();
//     e.key === "ArrowRight" && nextSlide();
//   });
// };
// slider();

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

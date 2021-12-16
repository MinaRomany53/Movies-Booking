"use strict";
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

/******************** Start Slider *******************/
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();
/******************** End Slider *******************/

/******************* Start Movies List form moviesDB Api *******************/

/* Start Movies List form moviesDB Api*/
const bestMoviesContainer = document.querySelector(".BestMovies__content");

// Using "https://www.themoviedb.org/settings/api" to get Data for Movies.
// "https://www.themoviedb.org/documentation/api/discover"
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=acf972594b1f5f9519aa0cee9b393656&page=1";
// because we didn't have full path when we call IMG attr from obj within API.
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

//Get Intial Movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  showingMovies(data.results);
}

const showingMovies = function (movies) {
  bestMoviesContainer.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    let movieHtml = "";
    if (i === 1 || i === 10) {
      movieHtml = `            
      <div class="movie">
        <img src="${IMAGE_PATH + movies[i].poster_path}" alt="${
        movies[i].title
      }" />
        <div class="overlay__content">
          <h3>${movies[i].title}</h3>
          <span class="rating">G</span>
          <p class="overview">${movies[i].overview}</p>
          <div class="overlay__btns">
            <button class="btn more-info__btn">More Info</button>
            <button class="btn book__btn">Book</button>
          </div>
        </div>
      </div>`;
    } else {
      let str = movies[i].title;
      if (str.length > 18) {
        str = str.slice(0, 17) + "...";
      }
      movieHtml = `            
      <div class="movie">
        <img src="${IMAGE_PATH + movies[i].poster_path}" alt="${
        movies[i].title
      }" />
        <div class="overlay__content">
          <h3>${movies[i].title}</h3>
          <span class="rating">12+</span>
          <div class="overlay__btns">
            <button class="btn more-info__btn">More Info</button>
            <button class="btn book__btn">Book</button>
          </div>
        </div>
      </div>`;
    }
    bestMoviesContainer.insertAdjacentHTML("beforeend", movieHtml);
  }
};
/******************* Start Movies List form moviesDB Api *******************/

const signature = document.querySelector(".signature");
signature.innerHTML = `Developed by <span>❤</span> Mina`;

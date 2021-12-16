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

/* Start Movies List form moviesDB Api*/
const cardsContainer = document.getElementById("cards-container");

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
  cardsContainer.innerHTML = "";
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

const signature = document.querySelector(".signature");
signature.innerHTML = `Developed by <span>❤</span> Mina`;

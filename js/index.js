import { createCard } from "../js/function.js";

const BASE_URL = "https://frontend-mentor-apis-6efy.onrender.com";
const wrapper = document.getElementById("wrapper");
const region = document.getElementById("region");
const input = document.getElementById("input");
const container = document.getElementById("container");
const toggleModeElement = document.getElementById("toggle-mode");
const navbarStart = document.getElementsByClassName("navbarStart");

let darkMode = false;
toggleModeElement.addEventListener("click", toggleDarkMode);
function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? "#333" : "#f0f0f0";
  container.style.backgroundColor = darkMode ? "#333" : "#f0f0f0";
  navbarStart.style.backgroundColor = darkMode ? "#f0f0f0" : "#333";
  region.style.backgroundColor = darkMode ? "#333" : "#f0f0f0";

  toggleModeElement.textContent = darkMode ? "☀️" : "🌙";
}

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", function () {
    document.body.removeChild("loader");
  });
});

region.addEventListener("change", function (e) {
  e.preventDefault();
  let from = region.value;
  console.log(from);
  fetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries?region=${from}`
  )
    .then((data) => data.json())
    .then((data) => {
      wrapper.innerHTML = "";
      data.data.forEach((country) => {
        // let card = `<div class="card">
        // <img src="${el.flags.png}" alt="el.flags.png">
        // <h2>${el.name.common}</h2>
        // <p>Population-${el.population}</p>
        // <p>Region-${el.region}</p>
        // <p>Capital-${el.capital}</p>
        // </div>`;
        let cards = createCard(country);
        wrapper.innerHTML += cards;
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

input.addEventListener("keyup", function () {
  let value = region.value;
  console.log(value);
  fetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${input.value}`
  )
    .then((data) => data.json())
    .then((data) => {
      wrapper.innerHTML = "";
      data.data.forEach((el) => {
        let card = `<div class="card">
        <img src="${el.flags.png}" alt="el.flags.png">
        <h2>${el.name.common}</h2>
        <p>Population-${el.population}</p>
        <p>Region-${el.region}</p>
        <p>Capital-${el.capital}</p>
      </div>`;
        wrapper.innerHTML += card;
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch(`${BASE_URL}/countries`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((result) => {
      result.data.forEach((element) => {
        let card = createCard(element);
        wrapper.innerHTML += card;
      });
    });
});

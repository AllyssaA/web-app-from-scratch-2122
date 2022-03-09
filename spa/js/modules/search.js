import { getData } from "./getData.js";

/**
 * @title Search eventlisteners
 * @description eventlisteners to use input for search
 * @function searchEvent
 */
export function searchEvent() {
  document
    .querySelector(".search-bar")
    .addEventListener("keypress", (event) => {
      if (event.key === "enter") {
        search();
      }
    });

  document.querySelector(".search-btn").addEventListener("click", (event) => {
    search();
  });
}

function search() {
  const searchBar = document.querySelector(".search-bar");
  const searchInput = searchBar.value;
  const origin = window.location.origin;
  if (searchInput === "") {
    window.location.href = origin;
    return;
  }
  const url = `https://www.rijksmuseum.nl/api/nl/collection?key=0tlmzj3f&q=${searchInput}&ps=5`;
  location.hash = `#search/${searchInput}`;
  getData(url);
}

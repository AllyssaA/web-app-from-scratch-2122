/*
mapstructure

spa 
-> index.html
-> style
    -> css
-> script
    -> modules
    -> vendor(min js van andere partijen, zoals routie)
*/
import {getData} from "./modules/getData.js"
import {setArtPiece} from "./modules/render.js"

getAndRenderData();

const display = document.querySelector("section");
display.textContent = "Loading art collection...";

function getAndRenderData() {
  const getURL = "https://www.rijksmuseum.nl/api/nl/collection?key=0tlmzj3f";
  getData(getURL) // --> haalt de data op
    .then((response) => {
      setArtPiece(response, display); // --> plaatst de data in een html element 
    })
    .catch((error) => console.warn(error));
}

// document.querySelector("input").addEventListener("click", searchInput);
// function searchInput() {
//   const addClass = document.querySelector("input");
//   addClass.classList.add("search");
// }

// function search(){
//   const searchBtn = document.querySelector("search-btn");
//   const searchInput = document.querySelector("input-field");

//   const search = data.filter( (data) => {
//     return(
//       data.title.toLowercase()
//     )
//   })
//   display.innerHTML = "";
//   searchBtn.addEventListener("click", () => {
    
//   })
// }






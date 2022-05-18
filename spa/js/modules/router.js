import { getData } from "./getData.js";
import { detail, setArtPiece } from "./render.js";
import {uiState} from "./ui.js"
//  import { loadingArt } from "./ui.js";
// import { renderSearch, searchListener } from "./search.js";

// const display = document.querySelector("section");
// display.textContent = "Loading art collection...";

/**
 * @title Router
 * @description Routes for each page
 * @function
 */
export const router = () => {
  const url = "https://www.rijksmuseum.nl/api/nl/collection";
  const key = "?key=0tlmzj3f";
  // const key = "?key=0tlmzj3d";
  routie({
    overview: async () => {
      const getArtPiece = await getData(`${url}${key}&ps=20`);
      // uiState('entree')
      return setArtPiece(getArtPiece);
    },
    //Route to detail
    "detail/:id": async (id) => {
      const details = await getData(`${url}/${id}${key}`);
      // console.log("showing detail art")
      return detail(details);
    },
    "search/:keyword": async (keyword) => {
      const searchKeyword = await getData(`${url}${key}&q=${keyword}&ps=20`);
      if (searchKeyword.artObjects.length === 0) {
        uiState('noResult', keyword)
      } else {
        uiState('searched', keyword)
      }
      return setArtPiece(searchKeyword);
      //als je hier een terug knop naartoe wilt moet je de route eigenlijk opslaan in url
    },
    "": async () => {
      const getOverview = await getData(`${url}${key}&ps=20`);
      if(getOverview.artObjects.length > 0){
        uiState('entree')
      }
      return setArtPiece(getOverview);
    },
  });
};

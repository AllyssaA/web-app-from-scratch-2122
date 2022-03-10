import { getData } from "./getData.js";
import { detail, setArtPiece } from "./render.js";
// import { renderSearch, searchListener } from "./search.js";

const display = document.querySelector("section");
display.textContent = "Loading art collection...";

/**
 * @title Router
 * @description Routes for each page
 * @function
 */
export const router = () => {
  const url = "https://www.rijksmuseum.nl/api/nl/collection";
  const key = "?key=0tlmzj3f";
  routie({
    overview: async () => {
      const getArtPiece = await getData(`${url}${key}&ps=20`);
      return setArtPiece(getArtPiece, display);
    },
    //Route to detail
    "detail/:id": async (id) => {
      const details = await getData(`${url}/${id}${key}`);
      // console.log("showing detail art")
      return detail(details);
    },
    "search/:keyword": async (keyword) => {
      const searchKeyword = await getData(`${url}${key}&q=${keyword}&ps=20`);
      return setArtPiece(searchKeyword, display);
    },
    "": async () => {
      const getOverview = await getData(`${url}${key}&ps=20`);
      return setArtPiece(getOverview, display);
    },
  });
};

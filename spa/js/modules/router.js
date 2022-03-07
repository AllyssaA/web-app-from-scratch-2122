import { getData } from "./getData.js";
import { detail, setArtPiece } from "./render.js";

const display = document.querySelector("section");
display.textContent = "Loading art collection...";

export const router = () => {
  const url = "https://www.rijksmuseum.nl/api/nl/collection";
  const key = "?key=0tlmzj3f"
  routie({
    overview: async () => {
      const getArtPiece = await getData(`${url}${key}`);
      return setArtPiece(getArtPiece, display);
    },
    //Route to detail
    "detail/:id": async (id) => {
      const details = await getData(`${url}/${id}${key}`);
      console.log("showing detail art")
      return detail(details);
    },
    '': async () => {
        const getOverview = await getData(`${url}${key}`)
        return setArtPiece(getOverview, display) 
    }
  });
};



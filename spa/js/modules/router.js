import { getData } from "./getData";
import { detail, setArtPiece } from "./render";


export const router = () => {
  const url = "https://www.rijksmuseum.nl/api/nl/collection";
  const key = "?key=0tlmzj3f"
  routie({
    overview: async () => {
      const getArtPiece = await getData(`${url}`);
      return setArtPiece(getArtPiece);
    },
    //Route to detail
    "detail/:id": async (id) => {
      const details = await getData(`${url}/${id}${key}`);
      detail(details);
      console.log("showing detail art")
    }
  });
};



import { getData } from "./getData";
import { detail, setArtPiece } from "./render";
import routie from "../vendor/routie";

export const router = () => {
  const url = "https://www.rijksmuseum.nl/api/nl/collection?key=0tlmzj3f";
  routie({
    overview: async () => {
      const getArtPiece = await getData(`${url}`);
      return setArtPiece(getArtPiece);
    },
    //Route to detail
    "detail/:id": async (id) => {
      const details = await getData(`${url}/${id}`);
      detail(details);
    },
  });
};

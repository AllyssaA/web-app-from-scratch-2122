import { router } from "./modules/router.js";
import { searchEvent } from "./modules/search.js"

(async function compile() {
  searchEvent();
  router();
})();

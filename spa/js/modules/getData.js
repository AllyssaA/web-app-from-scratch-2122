import { loadingIsDone, uiState } from "./ui.js"
 /**
 * @title getData
 * @description fetches data from api 
 * @param {*} url 
 * @returns data from api
 */
export const getData = async (url) => {
  return await fetch(url)
    .then((response) => {
      return response
    })
    .then((response) => response.json())
    .catch((err) => {
      uiState('noData')
      console.error(err)
    })
    .finally(() => {
      loadingIsDone()
      console.log("finished loading")
    })
}

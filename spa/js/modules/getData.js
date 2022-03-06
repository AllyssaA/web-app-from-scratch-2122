
  /*
    data ophalen
 

export function xoxox(){}
export {getData}   een getch schrijven die de data ophaalt en deze terug stuurt
  */

/* Functie exporteren met een link die data terug stuurt */
export const getData = async (url) => {
  return await fetch(url)
    .then((response) => response.json())
    .catch((err) => console.error(err))
    .finally(() => {
      console.log("finished loading")
    })
}

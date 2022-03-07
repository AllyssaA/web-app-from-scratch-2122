/**
 * @title Collect art 
 * @description Stores collected art in an array
 * @function
 * @param {*} response 
 * @param {*} element 
 */
export function setArtPiece(response, element) {
  const artCollection = [];
  console.log(response);
  element.textContent = "";
  response.artObjects.forEach((art) => {
    artCollection.push({
      title: art.title,
      img: art.webImage.url,
      place: art.productionPlaces,
      maker: art.principalOrFirstMaker,
      artId: art.objectNumber
    });
  });
  showCollection(artCollection); //gebruikt functie hieronder, dus hoeft niet geexporteerd te worden
}


/**
 * @title Render art collection
 * @function
 * @description
 * @param {Object} dataset van API. Hier loop ik doorheen
 */
function showCollection(data) {
  const main = document.getElementById('collections')
  //controle als er al een element met class collection bestaat, zoniet voeg toe
  const createCollection = document.createElement('section')
  createCollection.setAttribute('class', 'collection')
  main.appendChild(createCollection)
  // bestaat de detail section? verwijder dit dan
  if(document.getElementById('detail')) {
    const detail = document.getElementById('detail')
    main.removeChild(detail)
  }

  data.forEach((item) => {
    const article = document.createElement("article");

    let output = `
      <a href="#detail/${item.artId}">
        <h2>${item.title}</h2>
        <h3>${item.maker}</h3>
        <figure>
          <img src="${item.img}" alt="">
          <figcaptio>${item.place}</figcaption>
        </figure>
      </a>
      `;

    article.innerHTML = output;
    document.querySelector(".collection").appendChild(article);
  });
}

/**
 * @title Data detail page
 * @description
 * @function
 * @param {*} data 
 * @returns 
 */
export const detail = (data) => {
  const mainContainer = document.querySelector("main");
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
  const detailArticle = `
  <article id="detail">
    <section>
      <h2>${data.artObject.title}</h2>
      <img src="${data.artObject.webImage.url}" alt="">
      <p>${data.artObject.longTitle}</p>
      <a id="button" href="#overview"<span>Back</span></a>
    <section>
  </article>
  `;

  mainContainer.insertAdjacentHTML('beforeend', detailArticle)
  return true;
};

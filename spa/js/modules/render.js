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

function showCollection(data) {
  data.forEach((item) => {
    const article = document.createElement("article");

    // let output =
    //   "<h2>" +
    //   item.title +
    //   "</h2>" +
    //   "<h3> " +
    //   item.maker +
    //   '</h3><figure><img src="' +
    //   item.img +
    //   '" alt=""><figcaption>' +
    //   item.place +
    //   " </figcaption></figure>";
    // console.log('overview')
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

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
    });
  });
  showCollection(artCollection); //gebruikt functie hieronder, dus hoeft niet geexporteerd te worden
}

function showCollection(data) {
  data.forEach((item) => {
    const article = document.createElement("article");

    let output =
      "<h2>" +
      item.title +
      "</h2>" +
      "<h3> " +
      item.maker +
      '</h3><figure><img src="' +
      item.img +
      '" alt=""><figcaption>' +
      item.place +
      " </figcaption></figure>";

    article.innerHTML = output;
    document.querySelector(".collection").appendChild(article);
  });
}



export const detail = (data) => {
  const mainContainer = document.querySelector("main");
  while (mainContainer.firstChild){
    mainContainer.removeChild(mainContainer.firstChild)
  }
  const detailArticle = `
  <article id="detail"
    <section>
      <img src="${data.img}" alt="">
      <p>${data.title}</p>
    <section>
    <section>
      <p>${data.title}</p>
    </section>
    <a id="button" href="#overview"<span>Back</span></a>
  </article>
  `;

  mainContainer.insertAdjecentHTML("beforehand", detailArticle);
  return true;
};

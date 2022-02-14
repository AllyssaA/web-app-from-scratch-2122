getAndRenderData();

const artCollection = [];

function getAndRenderData() {
  const getURL = "https://www.rijksmuseum.nl/api/nl/collection?key=0tlmzj3f";
  fetch(getURL)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      response.artObjects.forEach((art) => {
        artCollection.push({
          title: art.title,
          img: art.webImage.url,
          place: art.productionPlaces,
          maker: art.principalOrFirstMaker,
        });
      });
      showCollection(artCollection);
    })
    .catch((error) => console.log(error));
}

console.log(artCollection);

function showCollection(data) {
  data.forEach((item) => {
    const article = document.createElement("article");

    output =
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
    document.getElementById("collection").appendChild(article);
  });
}

getAndRenderData();

const display = document.querySelector("section");
display.textContent = "Loading art collection...";
const artCollection = [];

function getAndRenderData() {
  const getURL = "https://www.rijksmuseum.nl/api/nl/collection?key=0tlmzj3f";
  fetch(getURL)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      display.textContent = "";
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
    document.querySelector(".collection").appendChild(article);
  });
}

document.querySelector("input").addEventListener("click", searchInput);
function searchInput() {
  const addClass = document.querySelector("input");
  addClass.classList.add("search");
}

// const fetchData = async() => {
//   const url = "https://www.rijksmuseum.nl/api/nl/collection?key=0tlmzj3f";
//   const response = await fetch(url);
//   const data = response.json();
//   return data;
// }

function search(){
  const searchBtn = document.querySelector("search-btn");
  const searchInput = document.querySelector("input-field");

  const search = data.filter( (data) => {
    return(
      data.title.toLowercase()
    )
  })
  display.innerHTML = "";
  searchBtn.addEventListener("click", () => {
    
  })
}





// export {fetchData}

const DATASET = "./team-dataset.json";

async function getMembers(){
  let result = await fetch(DATASET)
  return await result.json();
}


function getMoreInfo(data){
  return data.map((item) => {
    const member = {
      name: item.memberName,
      lastName: item.memberSurname,
    }
    return member
  })
}

function getMember(data) {
  return data.map((item) => item.memberName);
}

function getSpecificMember(d){
  const { data } = d;
  return data.filter(getMembers).map(el => el.memberName)
}


// getMembers()
//   .then(getMoreInfo)
//   .then((data) => {
//     console.log(data)
//     data.forEach((element) => {
//       const contentName = document.createTextNode(element.name + element.lastName)
//       const NAME = document.querySelector("h1");
//       NAME.appendChild(contentName);

//       const elementSelect = document.querySelector(".front")

//       return elementSelect.appendChild(NAME)
//     })
//   })
//   .then(getSpecificMember)



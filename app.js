
// console.log(fetchData);

async function fetchData(endpoint) {
  const fetchLocation = fetch("https://yoga-api-nzy4.onrender.com/v1/" + endpoint);
  // const fetchString = 
  fetchLocation
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      //sort array (wrong order from the API)
      data.sort((a,b) => a.id - b.id)
      data.forEach(dataPoint => {
        console.log(dataPoint);
        addToContainer(".flex", dataPoint.id);
      })
      return true
    })
    .catch((err) => console.error(err))
  console.log("Started request");
}

function addToContainer(container, item) {
  const containerDiv = document.querySelector(container);
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("poseItem");
  itemDiv.textContent = item;
  containerDiv.appendChild(itemDiv);
}

fetchData("poses")
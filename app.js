
// console.log(fetchData);

async function fetchData(endpoint) {
  const fetchLocation = fetch("https://yoga-api-nzy4.onrender.com/v1/" + endpoint);
  // const fetchString = 
  fetchLocation
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      data.forEach(dataPoint => {
        console.log(dataPoint);
        addToContainer("flex", dataPoint.id);
      })
      return true
    })
    .catch((err) => console.error(err))
  console.log("Started request");
}

function addToContainer(container, item) {
  const containerDiv = document.querySelector("." + container);
  const itemDiv = document.createElement("div");
  itemDiv.textContent = item;
  containerDiv.appendChild(itemDiv);
}

function sortArray(arr) {
  arr.sort();
  return arr;
}
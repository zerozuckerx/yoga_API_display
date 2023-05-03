
// console.log(fetchData);

async function fetchData(endpoint) {
  const fetchString = fetch("https://yoga-api-nzy4.onrender.com/v1/" + endpoint);
  fetchString
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      // return true
    })
  
  console.log("Started request");
}
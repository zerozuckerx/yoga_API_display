const fetchData = fetch("https://yoga-api-nzy4.onrender.com/v1/");

console.log(fetchData);

fetchData
  .then((response) => response.json())
  .then((data) => {
    console.log(data.base)
  })

console.log("Started request");
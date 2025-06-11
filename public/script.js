const container = document.getElementById("container");
const userInput = document.getElementById("userInput");

async function fetchData() {
  const query = encodeURIComponent(userInput.value);
  const response = await fetch(`/.netlify/functions/fetch-data?query=${query}`);
  const data = await response.json();

  console.log(data);

  container.innerHTML = "";

  const newCard = document.createElement("div");
  newCard.innerHTML = `
  <p>${data.results[0].original_title}</p>
  <p>${data.results[0].overview}</p>
  <p>Rating - ${data.results[0].vote_average}</p>
  <hr>
  <p>${data.results[1].original_title}</p>
  <p>${data.results[1].overview}</p>
  <p>Rating - ${data.results[1].vote_average}</p>
  <hr>
  <p>${data.results[2].original_title}</p>
  <p>${data.results[2].overview}</p>
  <p>Rating - ${data.results[2].vote_average}</p>
  <hr>
  <p>${data.results[3].original_title}</p>
  <p>${data.results[3].overview}</p>
  <p>Rating - ${data.results[3].vote_average}</p>
  <hr>
  <p>${data.results[4].original_title}</p>
  <p>${data.results[4].overview}</p>
  <p>Rating - ${data.results[4].vote_average}</p>
  <hr>
  `;
  container.appendChild(newCard);
}

const downloadBtn = document.getElementById("downloadBtn");
const peopleDiv = document.getElementById("people");

function download() {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => showPeople(data.results))
    .catch((error) => {
      peopleDiv.textContent = "Помилка завантаження: " + error;
    });
}

function showPeople(people) {
  peopleDiv.innerHTML = "";

  for (const person of people) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = person.picture.large;

    const info = document.createElement("div");
    info.innerHTML =
      "<p>Postcode: " + person.location.postcode + "</p>" +
      "<p>Coordinates: " + person.location.coordinates.latitude + ", " +
                           person.location.coordinates.longitude + "</p>" +
      "<p>Email: " + person.email + "</p>" +
      "<p>City: " + person.location.city + "</p>";

    card.append(img, info);
    peopleDiv.append(card);
  }
}

downloadBtn.addEventListener("click", download);
function updateParisTime() {
  let sfElement = document.querySelector("#san-francisco");
  if (sfElement) {
    let sfDateEl = sfElement.querySelector(".date");
    let sfTimeEl = sfElement.querySelector(".time");
    let sfTime = moment().tz("America/Los_Angeles");
    sfDateEl.innerHTML = moment().format("dddd MMMM Do YYYY");
    sfTimeEl.innerHTML = sfTime.format("H:mm:ss [<small>]A[</small>]");
  }
  let tkElement = document.querySelector("#tokyo");
  if (tkElement) {
    let tkDateEl = tkElement.querySelector(".date");
    let tkTimeEl = tkElement.querySelector(".time");
    let tkTime = moment().tz("America/Los_Angeles");
    tkDateEl.innerHTML = moment().format("dddd MMMM Do YYYY");
    tkTimeEl.innerHTML = tkTime.format("H:mm:ss [<small>]A[</small>]");
  }
  let prElement = document.querySelector("#paris");
  if (prElement) {
    let prDateEl = prElement.querySelector(".date");
    let prTimeEl = prElement.querySelector(".time");
    let prTime = moment().tz("Europe/Paris");
    prDateEl.innerHTML = moment().format("dddd MMMM Do YYYY");
    prTimeEl.innerHTML = prTime.format("H:mm:ss [<small>]A[</small>]");
  }
  let isElement = document.querySelector("#istanbul");
  if (isElement) {
    let isDateEl = isElement.querySelector(".date");
    let isTimeEl = isElement.querySelector(".time");
    let isTime = moment().tz("Europe/Istanbul");
    isDateEl.innerHTML = moment().format("dddd MMMM Do YYYY");
    isTimeEl.innerHTML = isTime.format("H:mm:ss [<small>]A[</small>]");
  }
}
updateParisTime();
setInterval(updateParisTime, 1000);

function updateCity(event) {
  let cityTZ = event.target.value;
  let cityName = cityTZ.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTZ);
  let citiesEl = document.querySelector("#cities");
  citiesEl.innerHTML = `
  <div class="city">
    <div>
    <h2>${cityName}</h2>
    
        <div class="date">${cityTime.format("dddd MMMM Do YYYY")}</div>
        </div>
    <div class="time">${cityTime.format("H:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small>
  </div>
  </div>`;
  let selecElement = document.querySelector("#city-selected");
  selecElement.selectedIndex = 0;
}

let citySelectedElement = document.querySelector("#city-selected");
citySelectedElement.addEventListener("change", updateCity);

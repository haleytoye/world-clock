function updateCityTime() {
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

let cityInterval = null;

function updateCity(event) {
  let cityTZ = event.target.value;
  if (cityTZ === "current") {
    cityTZ = moment.tz.guess();
  }
  let cityName = cityTZ.replace("_", "").split("/")[1];
  clearInterval(cityInterval);

  setCityInterval(cityTZ, cityName);
  cityInterval = setInterval(setCityInterval, 1000, cityTZ, cityName);
}

function setCityInterval(cityTZ, cityName) {
  let citiesEl = document.querySelector("#cities");
  let cityTime = moment().tz(cityTZ);
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
  </div>
  </br>
  <a href="/">All cities</a>`;

  let selecElement = document.querySelector("#city-selected");
  selecElement.selectedIndex = 0;
}
function changeTheme() {
  console.log("dark");
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let citySelectedElement = document.querySelector("#city-selected");
citySelectedElement.addEventListener("change", updateCity);

let darkbutton = document.querySelector(".theme");
darkbutton.addEventListener("click", changeTheme);

updateCityTime();
setInterval(updateCityTime, 1000);

setInterval(function () {
  let sfElement = document.querySelector("#san-francisco");
  let sfDateEl = sfElement.querySelector(".date");
  let sfTimeEl = sfElement.querySelector(".time");
  let sfTime = moment().tz("America/Los_Angeles");
  sfDateEl.innerHTML = moment().format("dddd MMMM Do YYYY");
  sfTimeEl.innerHTML = sfTime.format("H:mm:ss [<small>]A[</small>]");
}, 1000);

function updateParisTime() {
  let prElement = document.querySelector("#paris");
  let prDateEl = prElement.querySelector(".date");
  let prTimeEl = prElement.querySelector(".time");
  let prTime = moment().tz("Europe/Paris");
  prDateEl.innerHTML = moment().format("dddd MMMM Do YYYY");
  prTimeEl.innerHTML = prTime.format("H:mm:ss [<small>]A[</small>]");

  let isElement = document.querySelector("#istanbul");
  let isDateEl = isElement.querySelector(".date");
  let isTimeEl = isElement.querySelector(".time");
  let isTime = moment().tz("Europe/Istanbul");
  isDateEl.innerHTML = moment().format("dddd MMMM Do YYYY");
  isTimeEl.innerHTML = isTime.format("H:mm:ss [<small>]A[</small>]");
}
updateParisTime();
setInterval(updateParisTime, 1000);

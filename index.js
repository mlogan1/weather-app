const weather = document.getElementById("weather")
const form = document.getElementById("weatherForm")
const input = document.getElementById("zip")
const weatherStats = document.getElementById("weatherStats")
const wiki = document.getElementById("wiki")

const getWeather = function(zip) {

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=9f5d9f1328a0755b30942eb6a69132ad`)
  .then(response => response.json())
  .then(data => {

    weather.textContent = `The current temp in ${data.name} is ${data.main.temp}°`

    let weatherData= `
    <li>Current conditions: <span class="accent">${data.weather[0].description}</span></li>
    <li>Cloud cover <span class="accent">${data.clouds.all}%</span></li>
    <li>Feels like <span class="accent">${data.main.feels_like}°</span></li>
    <li>High/Low <span class="accent">${data.main.temp_max}°</span> / <span class="accent">${data.main.temp_min}°</span></li>
    <li>Humidity <span class="accent">${data.main.humidity}%</span></li>
    <li>Pressure <span class="accent">${data.main.pressure} millibars</span></li>
    <li>Visibility <span class="accent">${data.visibility} meters</span></li>
    <li>Winds from: <span class="accent">${data.wind.deg}°</span> speed: <span class="accent">${data.wind.speed} mph</span> gusting: <span class="accent">${data.wind.gust} mph</span></li>
    <li>Coordinates lat: <span class="accent">${data.coord.lat}</span> long: <span class="accent">${data.coord.lon}</span></li>
    `
   weatherStats.innerHTML = weatherData
   wiki.innerHTML = `
      <iframe
      width="100%"
      height="350"
      style="border:0"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCFAUsQIAiKOBve7esHPgr93LuWrNiFuG8&q=${zip}">
    </iframe>
   `

  })
  .catch(err => console.log(err))

}

form.addEventListener("submit", (event) => {
  if (input.value !== "") {
    getWeather(input.value);
    input.value = "";
    event.preventDefault();
  }  

})

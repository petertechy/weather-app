const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

function convertKelvinToCelsius(kelvin) {
  return (kelvin - 273).toFixed(2);
}

document.getElementById('add').addEventListener('click', async function () {
  const inputVal = document.getElementById('cityinput').value;
  const weatherInfo = document.getElementById('weatherInfo');

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}`);
    const data = await response.json();

    const cityName = data.name;
    const weatherDescription = data.weather[0].description;
    const temperature = convertKelvinToCelsius(data.main.temp);
    const windSpeed = data.wind.speed;

    weatherInfo.innerHTML = `
      <div class="text-center text-danger fs-2">
        <p class="animate">Weather of <span class="fw-bold">${cityName}</span></p>
        <p class="animate">Temperature: <span class="fw-bold">${temperature} °C</span></p>
        <p class="animate">Sky Conditions: <span class="fw-bold">${weatherDescription}</span></p>
        <p class="animate">Wind Speed: <span class="fw-bold">${windSpeed} km/h</span></p>
      </div>
    `;
  } catch (err) {
    weatherInfo.innerHTML = '<p class="text-danger text-center fw-bold display-5">Error: You entered the wrong city name</p>';
  }
});

let btn = document.getElementById('add');
let city = document.getElementById('cityoutput');
let description = document.getElementById('description');
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');
let apik = "3045dd712ffe6e702e3245525ac7fa38";

function convertion(val) {
  return (val - 273).toFixed(2);
}

btn.addEventListener('click', function () {
  let inputval = document.getElementById('cityinput').value;
  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
      let nameval = data['name'];
      let descripText = data['weather'][0]['description'];
      let tempature = data['main']['temp'];
      let wndspd = data['wind']['speed'];
      city.innerHTML = `Weather of <span>${nameval}</span>`;
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
      description.innerHTML = `Sky Conditions: <span>${descripText}</span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h</span>`;
    })
    .catch(err => alert('You entered the wrong city name'))
});
const api = {
    key: "3d419802349584cd12d903c140f7eb75",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const sb = document.querySelector('.searchBox');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(sb.value);
    
    }
}
function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  var t;
  console.log(weather);
  let ciudad = document.querySelector('.lugar .ciudad');
  ciudad.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.querySelector('.info .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;


  let CLIMA = document.querySelector('.CLIMA');
  CLIMA.innerText = weather.weather[0].main;

  let icon = document.querySelector('.icon');
  t="http://openweathermap.org/img/wn/"+`${weather.weather[0].icon}`+"@2x.png";
  console.log(t);
  document.getElementById("icon").src=t;

  let maxMin = document.querySelector('.info .maxMin');
  maxMin.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

}

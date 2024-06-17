let cityAsked = "Trois-Bassins";

async function getWeather(cityAsked) {
  const weather = await fetch(`http://api.weatherapi.com/v1/marine.json?key=2e593f183de0472295351012241706&q=${cityAsked}&days=1`);
  const weatherJson = await weather.json();
  console.log(weatherJson);

  const weatherInfos = weatherJson.location;

  const weatherCity = weatherJson.location.name;
  const weatherWavesHeigts = weatherJson.forecast.forecastday[0];

  console.log(weatherInfos);
  console.log(weatherCity);
  console.log(weatherWavesHeigts.hour);

  let hoursOfDay = weatherWavesHeigts.hour;

  console.log(hoursOfDay + "OK");

  //Génération de l'heure et la taille des vagues
  let i = 0;
  for (i in hoursOfDay) {
    const spotTitle = document.getElementById("spot_name");
    const showElement = document.getElementById("show");
    const hourCalendar = hoursOfDay[i].time + "h : ";
    const hourHeight = hoursOfDay[i].swell_ht_mt + "m";

    spotTitle.innerHTML = cityAsked;

    const listInRow = document.createElement("div");

    const hourCalendarHtml = document.createElement("p");
    hourCalendarHtml.innerHTML = i + "h :";

    const hourHeightHtml = document.createElement("p");
    hourHeightHtml.innerHTML = hourHeight;

    listInRow.appendChild(hourCalendarHtml);
    listInRow.appendChild(hourHeightHtml);

    showElement.appendChild(listInRow);

    console.log(hourCalendar + hourHeight);
    i++;
  }

  return weatherJson;
}

getWeather(cityAsked);

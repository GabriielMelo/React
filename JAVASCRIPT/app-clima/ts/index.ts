const apikey = "b56ba486eb706afd4f0adc997ad90a6c";
const form = document.querySelector("#search-form > form");
const sectionWeatherInfo = document.querySelector("#weather-info");

const input: HTMLInputElement | null =
  document.querySelector("#input-location");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!input || !sectionWeatherInfo) return;
  const location = input.value;
  if (location.length < 3) {
    window.alert("Inválid Location");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&lang=pt_br&units=metric`
    );

    const data = await response.json();
    console.log(data);
    const locationInfo = {
      temp: Math.round(data.main.temp),
      location: data.name,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };

    sectionWeatherInfo.innerHTML = `
  <div class="weather-data">
          <h2>${locationInfo.location}</h2>
          <span>${locationInfo.temp}°C</span>
        </div>

        <img src="${locationInfo.icon}"/>`;
  } catch (err) {
    console.log("no results for this match", err);
  }
});

//

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apikey = "b56ba486eb706afd4f0adc997ad90a6c";
const form = document.querySelector("#search-form > form");
const sectionWeatherInfo = document.querySelector("#weather-info");
const input = document.querySelector("#input-location");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !sectionWeatherInfo)
        return;
    const location = input.value;
    if (location.length < 3) {
        window.alert("Inválid Location");
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&lang=pt_br&units=metric`);
        const data = yield response.json();
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
    }
    catch (err) {
        console.log("no results for this match", err);
    }
}));
//

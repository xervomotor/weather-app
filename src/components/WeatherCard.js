// WeatherCard.js

import { getMainElement } from '../utils/utilities';
import { addCityEditListener } from '../handlers/eventHandlers';

export function createWeatherCard(weatherData) {
    const main = getMainElement();
    if (!main) return;

    const weatherCardHtml = `
        <div class="weather-card">
            <div class="weather-location" contenteditable="true">${weatherData.location.name}</div>
            <div class="weather-condition">${weatherData.current.condition.text}</div>
            <div class="weather-temperature">${weatherData.current.temp_c} °C</div>
            <div class="weather-temp-lh">L: ${weatherData.forecast.forecastday[0].day.mintemp_c} °C / H: ${weatherData.forecast.forecastday[0].day.maxtemp_c} °C</div>
        </div>
    `;

    main.insertAdjacentHTML('afterbegin', weatherCardHtml);
    addCityEditListener();
}
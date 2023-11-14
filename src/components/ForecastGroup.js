// ForecastGroup.js

import { getMainElement, getWeekday } from '../utils/utilities';

export function createForecastGroup(weatherData) {
    const main = getMainElement();
    if (!main) return;

    const forecastContainer = document.createElement('div');
    forecastContainer.className = 'weather-forecast';

    weatherData.forecast.forecastday.forEach(day => {
        const weekdayDiv = document.createElement('div');
        weekdayDiv.className = 'weekday';

        const dayDiv = document.createElement('div');
        dayDiv.textContent = getWeekday(day.date);

        const conditionDiv = document.createElement('div');
        conditionDiv.textContent = day.day.condition.text;

        const tempDiv = document.createElement('div');
        tempDiv.textContent = `${day.day.avgtemp_c} °C`;

        weekdayDiv.appendChild(dayDiv);
        weekdayDiv.appendChild(conditionDiv);
        weekdayDiv.appendChild(tempDiv);

        forecastContainer.appendChild(weekdayDiv);
    });

    main.appendChild(forecastContainer);
}
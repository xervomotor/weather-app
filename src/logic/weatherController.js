// weatherController.js

import { createWeatherCard } from '../components/WeatherCard';
import { createForecastGroup } from '../components/ForecastGroup';
import { getWeather } from '../api/weatherAPI';
import { getMainElement } from '../utils/utilities';

async function updateWeatherForCity(city) {
    try {
        const weatherData = await getWeather(city);

        if (weatherData && weatherData.location && weatherData.current && weatherData.forecast) {
            const main = getMainElement();
            main.innerHTML = ''; 
            createWeatherCard(weatherData);
            createForecastGroup(weatherData);
            updateParamGridValues(weatherData); 
        } else {
            if (city !== 'Melbourne') {
                updateWeatherForCity('Melbourne');
            }
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        if (city !== 'Melbourne') {
            updateWeatherForCity('Melbourne');
        }
    }
}

function updateCityWeather(cityDiv) {
    let newCity = cityDiv.textContent.trim();
    if (!newCity) {
        newCity = 'Melbourne';
    }
    updateWeatherForCity(newCity);
}

function getParamGridData(weatherData) {
    return [
        [
            { name: "Sunrise", value: weatherData.forecast.forecastday[0].astro.sunrise },
            { name: "Sunset", value: weatherData.forecast.forecastday[0].astro.sunset },
            { name: "Chance of Rain", value: `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain} %` },
            { name: "Humidity", value: `${weatherData.current.humidity} %` },
            { name: "Wind", value: `${weatherData.current.wind_kph} km/h` }
        ],
        [
            { name: "Feels Like", value: `${weatherData.current.feelslike_c} °C` },
            { name: "Visibility", value: `${weatherData.current.vis_km} km` },
            { name: "Pressure", value: `${weatherData.current.pressure_mb} hPa` },
            { name: "UV Index", value: weatherData.current.uv },
            { name: "Precipitation", value: `${weatherData.current.precip_mm} mm` }
        ]
    ];
}

function updateParamGridValues(weatherData) {
    const parameters = getParamGridData(weatherData);

    parameters.forEach((rowParams, rowIndex) => {
        rowParams.forEach((param, paramIndex) => {
            const paramValueElement = document.getElementById(`param-value-${rowIndex}-${paramIndex}`);
            if (paramValueElement) {
                paramValueElement.textContent = param.value;
            }
        });
    });
}


export { updateCityWeather, getParamGridData, updateParamGridValues };
// app.js

import { getWeather } from './api/weatherAPI.js';
import { createWeatherCard } from './components/WeatherCard.js';
import { createForecastGroup } from './components/ForecastGroup.js';
import { createParamGrid } from './components/ParamGrid.js';
import './styles/styles.css';

export async function init() {
    const city = 'niigata';
    const data = await getWeather(city); 
    createWeatherCard(data);
    createForecastGroup(data);
    createParamGrid(data);
}

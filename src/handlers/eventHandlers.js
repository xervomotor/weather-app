// eventHandlers.js

import { updateCityWeather } from "../logic/weatherController";

export function addCityEditListener() {
    const cityDiv = document.querySelector('.weather-location');

    cityDiv.addEventListener('blur', function() {
        updateCityWeather(cityDiv);
    });

    cityDiv.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') { 
            e.preventDefault(); 
            updateCityWeather(cityDiv);
        }
    });
}
async function getWeather(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8a3ba5487b77443dbaa44807231211&q=${city}&days=7`);
    const data = await response.json();
    console.log(data);
    return data;
} 

function getMainElement() {
    const main = document.querySelector('main');
    if (!main) {
        console.error('Main element not found');
        return null;
    }
    return main;
}

function createWeatherCard(weatherData) {
    const main = getMainElement();
    if (!main) return;

    const weatherCardHtml = `
        <div class="weather-card">
            <div class="weather-location">${weatherData.location.name}</div>
            <div class="weather-condition">${weatherData.current.condition.text}</div>
            <div class="weather-temperature">${weatherData.current.temp_c} °C</div>
        </div>
    `;

    main.insertAdjacentHTML('afterbegin', weatherCardHtml);
}


function createForecastGroup(weatherData) {
    const main = getMainElement();
    if (!main) return;

    const forecastContainer = document.createElement('div');
    forecastContainer.className = 'weather-forecast';

    weatherData.forecast.forecastday.forEach(day => {
        const weekdayDiv = document.createElement('div');
        weekdayDiv.className = 'weekday';

        const dayDiv = document.createElement('div');
        dayDiv.textContent = day.date;

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



// test functionality
const city = 'melbourne';
getWeather(city)
    .then(data => createWeatherCard(data));

getWeather(city).then(data => createForecastGroup(data));
async function getWeather() {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=8a3ba5487b77443dbaa44807231211&q=melbourne');
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
} 

function createWeatherCard(weatherData) {
    const main = document.querySelector('main');
    if (!main) {
        console.error('Main element not found');
        return;
    }
    const weatherCardHtml = `
        <div class="weather-card">
            <div class="weather-location">${weatherData.location.name}</div>
            <div class="weather-condition">${weatherData.current.condition.text}</div>
            <div class="weather-temperature">${weatherData.current.temp_c} °C</div>
        </div>
    `;
    main.insertAdjacentHTML('afterbegin', weatherCardHtml);
}


// test functionality
getWeather().then(data => {createWeatherCard(data)});
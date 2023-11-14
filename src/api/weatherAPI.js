// weatherAPI.js

export async function getWeather(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8a3ba5487b77443dbaa44807231211&q=${city}&days=7`);
    const data = await response.json();
    console.log(data);
    return data;
} 

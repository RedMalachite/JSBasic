// async function fetchData(){
//     let responce = await fetch('https://swapi.dev/api/people/1');
//     let data = await responce.json();
//     return data;
// }
// console.log(fetchData());

async function getWeather() {
    const apiKey = '80ef50b309a6427e5f1ab29cce1ca7ee';
    const cityInput = document.getElementById('cityInput').value;
    const weatherSection = document.getElementById('weatherSection');

    try {
        const coordinates = await getCityCoordinates(apiKey, cityInput);
        const weatherData = await getWeatherData(apiKey, coordinates);
        displayWeather(weatherData, weatherSection);
    } catch (error) {
        console.error('Error:', error);
        weatherSection.innerHTML = 'Can not get weather data';
    }
}

async function getCityCoordinates(apiKey, cityName) {
    const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
    const response = await fetch(geocodingUrl);
    const data = await response.json();

    if (data.length === 0) {
        throw new Error('City not found');
    }

    const coordinates = {
        lat: data[0].lat,
        lon: data[0].lon
    };

    return coordinates;
}

async function getWeatherData(apiKey, coordinates) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`;
    const response = await fetch(weatherUrl);
    const data = await response.json();

    if (data.cod !== 200) {
        throw new Error(`Error: ${data.message}`);
    }

    return data;
}

function displayWeather(weatherData, weatherSection) {
    const temperatureCelsius = (weatherData.main.temp - 273.15).toFixed(2);

    const weatherHtml = `
        <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>Temperature: ${temperatureCelsius} &deg;C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        <p>Pressure: ${weatherData.main.pressure} hPa</p>
      `;

    weatherSection.innerHTML = weatherHtml;
}
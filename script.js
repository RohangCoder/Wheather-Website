




const apiKey = '580b734e658f510d5096e324304e0763'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.querySelector('.weather-info').style.display = 'block';
        } else {
            alert(data.message);
            document.querySelector('.weather-info').style.display = 'none';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


function getWeather() {
    const apiKey = 'd7a8d944e376f6e9e6fd3af2bb39f6d9';
    const apiCity = document.getElementById('cidade').value;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const weatherDescription = data.weather[0].description;
            const weatherWind = data.wind.speed;
            const maxTemp = data.main.temp_max;  
            const minTemp = data.main.temp_min;  
            const humidity = data.main.humidity; 

            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `<p>Cidade: ${cityName}</p>
                                    <p>Temperatura max: ${maxTemp}°C</p> 
                                    <p>Temperatura min: ${minTemp}°C</p>  
                                    <p>Descrição: ${weatherDescription}</p>
                                    <p>Vento: ${weatherWind}</p>
                                    <p>Umidade: ${humidity}%</p>`; 
            })
            .catch(error => {
                    console.error('Erro ao obter dados do clima: ', error);
            });
    }

document.getElementById('cidade').addEventListener('input', getWeather);
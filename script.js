function getWeather() {
    const apiKey = '741b587a1f9414d3ebd14aaaed7bd649';
    const apiCity = document.getElementById('cidade').value;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const windSpeed = data.wind.speed;

        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `<p>Cidade: ${cityName}</p>
                                <p>Temperatura: ${temperature}°C</p>  
                                <p>Descrição: ${weatherDescription}</p>
                                <p>Velocidade do Vendo: ${windSpeed}</p>`;
    })
    .catch(error => {
        console.error('Erro ao obter dados do clima: ', error);
    });

}

document.getElementById('cidade').addEventListener('input', getWeather);
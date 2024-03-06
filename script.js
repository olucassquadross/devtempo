function getWeather() {
    const apiKey = 'd7a8d944e376f6e9e6fd3af2bb39f6d9';

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const cityName = data.name;
        const temperature = data.main.temp;
        const wheatherDescription = data.wheather[0].description;

        const wheatherDiv = document.getElementById('wheater');
    })

}
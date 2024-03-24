const apiKey = '973fe5edf67ee7723d95de622646ad4b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBar = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function getWeather(city){
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  const data = await response.json();
  

  if (response.status == 404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {

    if (data.weather[0].main === 'Clear') {
      weatherIcon.src = 'images/clear.png';
    } 
    else if (data.weather[0].main === 'Rain') {
      weatherIcon.src = 'images/rain.png';
    } 
    else if (data.weather[0].main === 'Snow') {
      weatherIcon.src = 'images/snow.png';
    } 
    else if (data.weather[0].main === 'Clouds') {
      weatherIcon.src = 'images/clouds.png';
    } 
    else if (data.weather[0].main === 'Drizzle') {
      weatherIcon.src = 'images/drizzle.png';
    } 
    else if (data.weather[0].main === 'Mist') {
      weatherIcon.src = 'images/mist.png';
    }

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';

    console.log(data)
  }
}

searchBtn.addEventListener('click', ()=> {
    getWeather(searchBar.value);
})

searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getWeather(searchBar.value);
  }
});



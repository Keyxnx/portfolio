let arr = [];
const searchBox = document.querySelector('.search-box');

document.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchValue = document.querySelector('.search-box').value;
  getData(searchValue);
});

async function getData(city='kyiv'){
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=006069a700641a7f7997c29c558e9dce`);
    const data = await response.json();
    displayData(data, city);
    arr.push(JSON.stringify(city))
    localStorage.setItem('cities', arr[arr.length - 1])
  } catch (error) {
    console.log(city + ' not found!');
  }
}

function displayData(data, city) {
  if(data.cod === '404' || city === undefined) {
    console.log('City not found')
  } else {
    localStorage.setItem('cities', arr.push(city))
  }
  console.log(data);
  document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp - 272)} °C`;
  document.querySelector('.max-temperature').innerHTML = `${Math.round(data.main.temp_max - 272)} °C`;
  document.querySelector('.min-temperature').innerHTML = `${Math.round(data.main.temp_min - 272)} °C`;
  document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
  document.querySelector('.air-pressure').innerHTML = `${data.main.pressure} PS`;
  document.querySelector('.feels-like').innerHTML = `${Math.round(data.main.feels_like - 272)} °C`;
  document.querySelector('.wind-speed').innerHTML = `${data.wind.speed} km/h`;
}

function setLocalStorage() {
  let arrCities = [];
  localStorage.setItem(arrCities, 0);
}

function getDate() {
  let date = new Date();
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let dayOfWeek = days[date.getDay()];
  let mm = months[date.getMonth()];
  let dd = date.getDate();
  let yyyy = date.getFullYear();
  document.querySelector('.date-month').innerHTML = mm;
  document.querySelector('.date-day').innerHTML = dd;
  document.querySelector('.date-day-of-week').innerHTML = dayOfWeek;
  document.querySelector('.date-year').innerHTML = yyyy;
}
getData()
getDate();
setLocalStorage();


/* https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=006069a700641a7f7997c29c558e9dce */


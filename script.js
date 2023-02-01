const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timeZone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

//declare variables from ID selectors

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Array for days of the week
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//Array for months of the year

const API_KEY = '3d005f4d0f3648acfe6e759525b9d5aa';
//personal API key for openweather


setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'
    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes+ ' ' + '<span id="am-pm">${ampm}</span>' //revisit to fix current time

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]
    //takes from both the arrays 'days' and 'months' to accumulate and display on the landing page

}, 1000);

getWeatherData()
function getWeatherData (){
    navigator.geolocation.getCurrentPosition((success) => {

        let {latitude, longitude } = success.coords;

        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&unit=metric&appid=${API_KEY}')
        .then(res => res.json())
        .then(data => {

        console.log(data)
        showWeatherData(data);
        })


    })
}

function showWeatherData (data) {

    let {humitdity, pressure, sunrise, sunset, wind_speed} = data.current;
    /* <div class="others" id="current-weather-items">
    <div class="weather-item">
        <div>Humidity</div>
        <div>95.2%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>121</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>227</div>
    </div>
    <div class="weather-item">
        <div>Temperature</div>
        <div>22</div>
    </div>  */

}


/* https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} */
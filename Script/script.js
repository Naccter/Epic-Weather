document.getElementById("Refresh").onclick = WeatherRequest;

document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.onclick = function(event) {
        event.preventDefault(); // Prevent default link behavior
        changeLocation(this.innerText);
    }
});

function changeLocation(NewLocation) {
    document.querySelector(".location").innerText = NewLocation;
    WeatherRequest();
}

function WeatherRequest() {
    var Location = document.querySelector(".location").innerText;
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=b2aa33b713b04af78c082210242404&q=${Location}&days=6&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
        var currentTemp = data.current.temp_c;
        var currentTime = data.location.localtime;
        var currentDate = data.forecast.forecastday[0].date;
        var chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;

        const inputDate = currentDate;
        const dayOfWeek = getDayOfWeek(inputDate);

        function getDayOfWeek(dateString) {
          const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const date = new Date(dateString); // Create a new Date object from the input date string
          const dayOfWeek = date.getDay(); // Get the day of the week (0-6)
        
          return daysOfWeek[dayOfWeek];
        }





        document.querySelector(".rain-chance").innerHTML = `there is a ${chanceOfRain} % chance of rain.`
        document.querySelector(".temperature").innerHTML = `${currentTemp}°C`;
        document.querySelector(".current-time").innerHTML = currentTime;
        document.querySelector(".current-day").innerHTML = dayOfWeek;



    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}


  

WeatherRequest();
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
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=b2aa33b713b04af78c082210242404&q=${Location}&days=7&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
        var currentTemp = data.current.temp_c;
        var currentTime = data.location.localtime;
        var currentDate = data.forecast.forecastday[0].date;
        var chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
        var dayCheck = data.current.is_day;
        if (dayCheck == 0){
          var image = document.querySelector('#Image');
          image.src = 'pics/Moon.png';
          console.log(dayCheck);
        }
        else{
          var image = document.querySelector('#Image');
          image.src = 'pics/sol.png';
        }

        var inputDate = currentDate;
        var dayOfWeek = getDayOfWeek(inputDate);

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





        var forecast1Temp = data.forecast.forecastday[1].day.maxtemp_c;
        var forecast1ChanceOfRain = data.forecast.forecastday[1].day.daily_chance_of_rain;
        var forecast1Date = data.forecast.forecastday[1].date;

        inputDate = forecast1Date;
        dayOfWeek = getDayOfWeek(inputDate);

        document.querySelector(".day1").innerHTML = dayOfWeek;
        document.querySelector(".forecast-temp1").innerHTML = `${forecast1Temp}°C`;
        document.querySelector(".forecast-rain1").innerHTML = `chance of rain: ${forecast1ChanceOfRain}%`;


        var forecast2Temp = data.forecast.forecastday[2].day.maxtemp_c;
        var forecast2ChanceOfRain = data.forecast.forecastday[2].day.daily_chance_of_rain;
        var forecast2Date = data.forecast.forecastday[2].date;

        inputDate = forecast2Date;
        dayOfWeek = getDayOfWeek(inputDate);

        document.querySelector(".day2").innerHTML = dayOfWeek;
        document.querySelector(".forecast-temp2").innerHTML = `${forecast2Temp}°C`;
        document.querySelector(".forecast-rain2").innerHTML = `chance of rain: ${forecast2ChanceOfRain}%`;


        var forecast3Temp = data.forecast.forecastday[3].day.maxtemp_c;
        var forecast3ChanceOfRain = data.forecast.forecastday[3].day.daily_chance_of_rain;
        var forecast3Date = data.forecast.forecastday[3].date;

        inputDate = forecast3Date;
        dayOfWeek = getDayOfWeek(inputDate);

        document.querySelector(".day3").innerHTML = dayOfWeek;
        document.querySelector(".forecast-temp3").innerHTML = `${forecast3Temp}°C`;
        document.querySelector(".forecast-rain3").innerHTML = `chance of rain: ${forecast3ChanceOfRain}%`;



        var forecast4Temp = data.forecast.forecastday[4].day.maxtemp_c;
        var forecast4ChanceOfRain = data.forecast.forecastday[4].day.daily_chance_of_rain;
        var forecast4Date = data.forecast.forecastday[4].date;

        inputDate = forecast4Date;
        dayOfWeek = getDayOfWeek(inputDate);

        document.querySelector(".day4").innerHTML = dayOfWeek;
        document.querySelector(".forecast-temp4").innerHTML = `${forecast4Temp}°C`;
        document.querySelector(".forecast-rain4").innerHTML = `chance of rain: ${forecast4ChanceOfRain}%`;


        var forecast5Temp = data.forecast.forecastday[5].day.maxtemp_c;
        var forecast5ChanceOfRain = data.forecast.forecastday[5].day.daily_chance_of_rain;
        var forecast5Date = data.forecast.forecastday[5].date;

        inputDate = forecast5Date;
        dayOfWeek = getDayOfWeek(inputDate);

        document.querySelector(".day5").innerHTML = dayOfWeek;
        document.querySelector(".forecast-temp5").innerHTML = `${forecast5Temp}°C`;
        document.querySelector(".forecast-rain5").innerHTML = `chance of rain: ${forecast5ChanceOfRain}%`;


        var forecast6Temp = data.forecast.forecastday[6].day.maxtemp_c;
        var forecast6ChanceOfRain = data.forecast.forecastday[6].day.daily_chance_of_rain;
        var forecast6Date = data.forecast.forecastday[6].date;

        inputDate = forecast6Date;
        dayOfWeek = getDayOfWeek(inputDate);

        document.querySelector(".day6").innerHTML = dayOfWeek;
        document.querySelector(".forecast-temp6").innerHTML = `${forecast6Temp}°C`;
        document.querySelector(".forecast-rain6").innerHTML = `chance of rain: ${forecast6ChanceOfRain}%`;


    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}


  

WeatherRequest();
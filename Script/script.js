
WeatherRequest();



function WeatherRequest() {
    var Location = document.getElementsByClassName("location")[0].innerHTML;
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=b2aa33b713b04af78c082210242404&q=${Location}&days=6&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
        var currentTemp = data.current.temp_c;
        var currentTime = data.location.localtime;
        

        const temperature = document.getElementsByClassName("temperature")[0];
        temperature.innerHTML = `${currentTemp}°C`;
         
        document.getElementsByClassName("current-time")[0].innerHTML = currentTime;
        console.log(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });

  }









async function WeatherRequest() {
    var Location = document.getElementById("Location");
    await fetch("http://api.weatherapi.com/v1/forecast.json?key=b2aa33b713b04af78c082210242404&q=Seoul&days=6&aqi=no&alerts=no")
    .then(response => response.json)
    .then(data => {
        const currentTemp = data.current.temp_c;
        const currentTime = data.location.localtime;
         
    })
    console.log(Weather);
    
  }





  window.onload = () => {
    WeatherRequest();
  }

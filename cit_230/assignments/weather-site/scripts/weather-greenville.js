var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=27834,us&appid=7b989afe284ea3092c7dac18adc7982d&units=imperial', true);

weatherObject.send();

weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);


    document.getElementById('city').innerHTML = weatherInfo.name;
    document.getElementById('temperature').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;
    
    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/"+iconcode+".png";
    document.getElementById('weathericon').src = icon_path;
}


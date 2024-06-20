var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = '361589b444bfae53e991e955090ab3e1';

function convert(val) {
    return (val - 273.15).toFixed(2); // Fixed to correct temperature conversion
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var tempature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = 'Weather of <span>' + nameval + '</span>';
            temp.innerHTML = 'Temperature: <span>' + convert(tempature) + ' °C</span>';
            description.innerHTML = 'Sky conditions: <span>' + descrip + '</span>';
            wind.innerHTML = 'Wind speed: <span>' + wndspeed + ' m/s</span>';
        })
        .catch(err => alert('You entered the wrong city name'));
});

window.onload = function(){
    searchButton = document.getElementById('search')
    searchBar = document.getElementById('cityName')
    currentCity = document.getElementById('city')
    weatherDesc = document.getElementById('desc')
    currentTemp = document.getElementById('temp')
    icon = document.getElementById('icon')
    if(searchBar !== true){console.log('search bar not here')}
    if(searchButton !== true){console.log('search button not here')}
    if(currentCity !== true){console.log('current city not here')}
    searchButton.addEventListener("click", () => {changeData(searchBar.value)})
}
async function currentWeather(city){
    weather = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=411e30ed6eee0e55bc7bf37ffebeac76")
    .then(data => data.json())
    return weather
}
async function getData(city){
    fullData = await currentWeather(city)
    description = fullData['weather'][0]['description']
    tempCelsius = Math.floor((fullData['main']['temp'] - 273.15)*10)/10
    imageCode = fullData['weather'][0]['icon']
    return {
        desc: description,
        temp: tempCelsius,
        code: imageCode
    }
}
async function changeData(city){
    try{
        info = await getData(city)
        imgUrl = "http://openweathermap.org/img/wn/" + info['code'] + "@2x.png"
        currentCity.innerHTML = "City: " + city
        weatherDesc.innerHTML = "Current Weather: " + info['desc']
        currentTemp.innerHTML = "Current Temperature: " + info['temp'] + "°C"
        icon.src = imgUrl
    }catch{
        currentCity.innerHTML = 'City not found!'
    }
}


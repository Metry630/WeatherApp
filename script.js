searchButton = document.getElementById('#search')
searchBar = document.getElementById('#cityName')
currentCity = document.getElementById('#city')
weatherDesc = document.getElementById('#desc')
currentTemp = document.getElementById('#temp')
icon = document.getElementById('#icon')
if(searchBar !== true){console.log('search bar not here')}
if(searchButton !== true){console.log('search button not here')}
searchButton.addEventListener('click', changeData(searchBar.value))

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
async function getImageUrl(code){
    image = await fetch("http://openweathermap.org/img/wn/" + code + "@2x.png")
}
async function changeData(city){
    info = await getData(city)
    imgUrl = await getImageUrl(info['code'])
    currentCity.innerHTML = "City: " + city
    weatherDesc.innerHTML = "Current Weather: " + info['desc']
    icon.src = imgUrl
}

window.onload = function () {
    searchButton = document.getElementById("search");
    searchBar = document.getElementById("cityName");
    currentCity = document.getElementById("city");
    weatherDesc = document.getElementById("desc");
    currentTemp = document.getElementById("temp");
    gif = document.getElementById("gif");
    icon = document.getElementById("icon");
    searchButton.addEventListener("click", () => {
      changeData(searchBar.value);
    });
  };
  async function currentWeather(city) {
    weather = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&APPID=411e30ed6eee0e55bc7bf37ffebeac76"
    ).then((data) => data.json());
    return weather;
  }
  async function getData(city) {
    fullData = await currentWeather(city);
    description = fullData["weather"][0]["description"];
    tempCelsius = Math.floor((fullData["main"]["temp"] - 273.15) * 10) / 10;
    imageCode = fullData["weather"][0]["icon"];
    return {
      desc: description,
      temp: tempCelsius,
      code: imageCode,
    };
  }
  async function changeData(city) {
    try {
      info = await getData(city);
      imgUrl = "http://openweathermap.org/img/wn/" + info["code"] + "@2x.png";
      gifUrl =
        "https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=" +
        info["desc"];
      currentCity.innerHTML = "City: " + city;
      weatherDesc.innerHTML = "Current Weather: " + info["desc"];
      currentTemp.innerHTML = "Current Temperature: " + info["temp"] + "°C";
      icon.src = imgUrl;
      fetchGif(info["desc"]);
    } catch {
      currentCity.innerHTML = "City not found!";
    }
  }
  async function fetchGif(desc) {
    fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=" +
        desc,
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        gif.src = response.data.images.original.url;
      })
      .catch((e) => {
        console.log(e);
      });
  }
async function getWeather(path) {
    const res = await fetch(path) // waits for the promise to resolve
    const json = await res.json() // waits for the promise to resolve
    console.log(json)
    const WeatherJson = {
        'name': json.name,
        'desc': json.weather[0].description,
        'temp': json.main.temp,
        'coordLat': json.coord.lat,
        'coordLon': json.coord.lon,
        'humidity': json.main.humidity,
        'pressure': json.main.pressure,
        'tempMax': json.main.temp_max,
        'tempMin': json.main.temp_min
    }
    // .catch(err => { onError(err) })
    return WeatherJson
}

async function getWeatherZip(apiKey, zip, units='imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&${units}`
    return getWeather(path)
  }

  async function getWeatherCity(apiKey, city) {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    return getWeather(path)
  }

async function getWeatherGeo(apiKey, lat, lon, units='imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&${units}`
    return getWeather(path)
  }
  

  export {
    getWeatherZip,
    getWeatherCity,
    getWeatherGeo
}

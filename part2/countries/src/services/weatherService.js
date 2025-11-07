import axios from "axios"


const baseUrl = "https://api.openweathermap.org/data/2.5/weather"

const getWeatherByCapital = (capital) => {
  const request = axios.get(`${baseUrl}?q=${capital}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
  return request.then(response => response.data)
//   console.log(request.then(response => response.data)

}

export default {
    getWeatherByCapital
}
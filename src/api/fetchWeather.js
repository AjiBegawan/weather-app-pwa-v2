import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

const getWeather = async (query) => {
   const { data } = await axios.get(URL, {
      params: {
         q: query,
         units: 'metric',
         APPID: API_KEY,
      }
   });
   console.log(data);

   return data;
}

const getAirQuality = async (query) => {
   const URL = 'https://air-quality-api.open-meteo.com/v1/air-quality';
   const { data } = await axios.get(URL, {
      params: {
         "latitude": 52.52,
         "longitude": 13.41,
         "hourly": ["pm10", "pm2_5"],
      }
   })
   return data
}

const getRainForecast = async (lon, lat) => {
   const URL = ''
}

export { getWeather, getAirQuality }



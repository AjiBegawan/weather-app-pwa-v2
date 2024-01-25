import * as React from 'react';
import { useState } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Header } from './components/Header';
import { BodyWeather } from './components/BodyWeather';
import { BodyForecast } from './components/BodyForecast';




const App = () => {
   const [query, setQuery] = useState('');
   const [weather, setWeather] = useState('');
   const [airQuality, setAirQuality] = useState('');
   const [areaLat, setAreaLat] = useState('')
   const [areaLon, setAreaLon] = useState('')
   const [toggleDarkMode, setToggleDarkMode] = useState(true);

   const toggleDarkTheme = () => {
      setToggleDarkMode(!toggleDarkMode);
   };

   const darkTheme = createTheme({
      palette: {
         mode: toggleDarkMode ? 'dark' : 'light',
         primary: {
            main: '#90caf9',
         },
         secondary: {
            main: '#131052',
         },
      }
   });


   return (
      <ThemeProvider theme={darkTheme}>
         <CssBaseline />
         <Header
            query={query}
            setQuery={setQuery}
            setWeather={setWeather}
            setAirQuality={setAirQuality}
            toggleDarkMode={toggleDarkMode}
            toggleDarkTheme={toggleDarkTheme}
         />
         <br />
         <BodyWeather
            weather={weather}
            airQuality={airQuality}
         />

         {/* <div className="city">
            <h1>Air Quality pm10</h1>
            <h1 >
               {airQuality.hourly.pm10[0]}
               <sup>μg/m³</sup>
            </h1>

            <h1>Air Quality pm2.5</h1>
            <h1 >
               {airQuality.hourly.pm2_5[0]}
               <sup>μg/m³</sup>
            </h1>
         </div> */}

         <BodyForecast></BodyForecast>
      </ThemeProvider>


   )
}

export default App;
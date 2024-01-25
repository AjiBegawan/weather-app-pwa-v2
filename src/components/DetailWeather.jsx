import * as React from 'react';
import { Card, CardContent, Grid, Divider } from '@mui/material'

export const DetailWeather = (attributes) => {

   const sunriseTime = () => {
      const sunrise = attributes.weather.sys.sunrise
      const date = new Date(sunrise * 1000);

      const formattedLocalTime = date.toString();
      return formattedLocalTime
   }

   const sunsetTime = () => {
      const sunrise = attributes.weather.sys.sunset
      const date = new Date(sunrise * 1000);

      const formattedLocalTime = date.toString();
      return formattedLocalTime
   }


   return (
      <>
         <Card >
            <CardContent>
               <Grid container spacing={2}>
                  <Grid item xs={3} align='center'>
                     <h4>Max Temp</h4>
                     <h2>
                        {Math.round(attributes.weather.main.temp_max * 10) / 10}
                        <sup>&deg;C</sup>
                     </h2>
                  </Grid>
                  <Grid item xs={3} align='center'>
                     <h4>Pressure</h4>
                     <h2>
                        {attributes.weather.main.pressure} hPa
                     </h2>
                  </Grid>
                  <Grid item xs={3} align='center'>
                     <h4>Wind</h4>
                     <h2>
                        {attributes.weather.wind.speed} m/s
                     </h2>
                  </Grid>
                  <Grid item xs={3} align='center'>
                     <h4>Wind Direction</h4>
                     <h2>
                        {attributes.weather.wind.deg} <sup>&deg;</sup>
                     </h2>
                  </Grid>
               </Grid>
               <Divider />
               <Grid container spacing={2}>
                  <Grid item xs={3} align='center'>
                     <h4>Min Temp</h4>
                     <h2>
                        {Math.round(attributes.weather.main.temp_min * 10) / 10}
                        <sup>&deg;C</sup>
                     </h2>
                  </Grid>
                  <Grid item xs={3} align='center'>
                     <h4>Humidity</h4>
                     <h2>
                        {attributes.weather.main.humidity}%
                     </h2>
                  </Grid>
                  <Grid item xs={3} align='center'>
                     <h4>Rain in 1 hours</h4>
                     <h2>
                        {attributes.weather.rain?.['1h'] ? `${attributes.weather.rain?.['1h']} mm` : '~'}
                     </h2>
                  </Grid>
                  <Grid item xs={3} align='center'>
                     <h4>Cloudiness</h4>
                     <h2>
                        {attributes.weather.clouds.all}%
                     </h2>
                  </Grid>
               </Grid>
               <Divider />
               <Grid container spacing={2}>
                  <Grid item xs={6} align='center'>
                     <h4>Sunrise</h4>
                     <h4>
                        {sunriseTime()}
                     </h4>
                  </Grid>
                  <Grid item xs={6} align='center'>
                     <h4>Sunset</h4>
                     <h4>
                        {sunsetTime()}
                     </h4>
                  </Grid>
               </Grid>
            </CardContent>
         </Card>

         <br />
         {/* <Card >
            <CardContent>
               <Grid container spacing={2}>
                  <Grid item xs={3} align='center'>
                     <h3>Min Temp</h3>
                     {Math.round(attributes.weather.main.temp_min * 10) / 10}
                     <sup>&deg;C</sup>
                  </Grid>
                  <Grid item xs={3} align='center'>
                     <h3>Humidity</h3>
                     {attributes.weather.main.humidity}%
                  </Grid>
                  <Grid item xs={3} align='center'>
                     <h3>Rain in 1 hours</h3>
                     {attributes.weather.rain?.['1h'] ? `${attributes.weather.rain?.['1h']} mm` : '~'}
                  </Grid>
                  <Grid item xs={3} align='center'>
                     <h3>Sunset</h3>
                     {sunsetTime()}
                  </Grid>
               </Grid>
            </CardContent>
         </Card> */}
         <br />
         {/* <Card >
            <CardContent>
               <Grid container spacing={2}>
                  <Grid item xs={3} align='center'>
                     <h3>Visibility</h3>
                     {attributes.weather.visibility === 10000
                        ? '> 10.000 m'
                        : `${attributes.weather.visibility} m`}
                  </Grid>
                  <Grid item xs={3} align='center'>
                     <h3>Wind Speed</h3>
                     {attributes.weather.wind.speed} m/s
                  </Grid>
                  <Grid item xs={3} align='center'>
                     <h3>Cloudiness</h3>
                     {attributes.weather.clouds.all}%
                  </Grid>
                  <Grid item xs={3} align='center'>

                  </Grid>
               </Grid>
            </CardContent>
         </Card> */}
      </>
   )
}
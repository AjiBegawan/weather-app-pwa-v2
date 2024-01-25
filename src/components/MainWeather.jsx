import * as React from 'react';
import { Card, CardContent, Badge, Typography, Divider } from '@mui/material'

export const MainWeather = (attributes) => {

   const localTime = () => {
      const time = attributes.weather.dt
      const todayDate = new Date(time * 1000)
      const formattedLocalTime = todayDate.toString();
      return formattedLocalTime
   }

   return (
      <>
         <Card >
            <CardContent>
               <Typography variant="h2" align='center'>
                  {attributes.weather.name} &nbsp;
                  <Badge badgeContent={attributes.weather.sys.country} color="warning" />
               </Typography>
               <Divider />
               <Typography variant="h4" align='center' >
                  {Math.round(attributes.weather.main.temp * 10) / 10}
                  <sup>&deg;C</sup>
                  <br></br>
                  <img
                     src={`https://openweathermap.org/img/wn/${attributes.weather.weather[0].icon}@2x.png`}
                     alt={attributes.weather.weather[0].description}
                  />
               </Typography>
               <Typography variant="h4" align='center'>
                  {attributes.weather.weather[0].main}
               </Typography>
               <Typography variant="subtitle2" align='center'>
                  <br />
                  Updated at {localTime()}
               </Typography>
            </CardContent>
         </Card>
      </>

   )
}

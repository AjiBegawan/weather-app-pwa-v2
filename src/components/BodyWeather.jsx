import * as React from 'react';
import { DetailWeather } from './DetailWeather';
import { MainWeather } from './MainWeather';

import { Grid } from '@mui/material';



export const BodyWeather = (attributes) => {
   return (
      <>
         {attributes.weather.main && (
            <Grid container spacing={2}>
               <Grid xs={0.5} />
               <Grid item xs={3.5} >
                  <MainWeather
                     weather={attributes.weather}
                  />
               </Grid>
               <Grid item xs={7.5} >
                  <DetailWeather
                     weather={attributes.weather}
                  />
               </Grid>
            </Grid>
         )}
      </>
   )
}

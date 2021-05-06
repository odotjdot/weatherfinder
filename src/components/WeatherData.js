import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../theme';

import Context from '../Context';

export default function WeatherData() {
  
  const { weatherData } = useContext(Context);

  const { 
    main: { 
      temp, 
      feels_like, 
      temp_min, 
      temp_max, 
      humidity,
    },
    name,
    weather,
    } = weatherData || {};

    const classes = useStyles();

  console.log(weatherData)
  return (
    <Grid container className={classes.weatherContent}>
    <Grid container item sm={12}>
      
        <Typography variant="h3" className={classes.cityTitle}>
          { name }
        </Typography> 
      
    </Grid>

    <Grid container justify="center">
      <Grid item sm={6}>
        <Typography variant="h1" className={classes.weatherTemp}>
          { Math.round(temp) }<span className={classes.tempDeg}>&deg;</span>
        </Typography>
        <Typography variant="caption">Feels Like: { Math.round(feels_like) }</Typography> 
        <Typography variant="h5">{ weather[0].description } </Typography> 
      </Grid>
      
      <Grid item container sm={6}>
        <Grid item xs={12}>
          <Typography variant="caption">Humidity </Typography>
          <Typography variant="h6">{ Math.round(humidity) }</Typography>
        </Grid>  
        <Grid item xs={12}>
          <Typography variant="caption">High</Typography>
          <Typography variant="h6"> { Math.round(temp_max) }</Typography>
        </Grid> 
        <Grid item xs={12}>
          <Typography variant="caption">Low </Typography>
          <Typography variant="h6">{ Math.round(temp_min) }</Typography>
        </Grid> 
      </Grid>
    </Grid>
    </Grid>
  )
}

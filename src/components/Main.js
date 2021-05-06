
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


import { useStyles } from '../theme';

import Error from '../components/Error';
import Context from '../Context';
import WeatherData from '../components/WeatherData';
import WeatherSearch from '../components/WeatherSearch';
import DateTime from '../components/DateTime';





export default function Main() {
  
  const [weatherData, setWeather] = useState();
  const [error, setError] = useState();
  const classes = useStyles();

  const apiCall = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (!city) return setError("Please enter the name of a city."), setWeather(null);
    const API_KEY = 'f00b2837b30336e775993079ebf43526';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
    const request = axios.get(url);
    const response = await request;
    console.log(e)
    setWeather(response.data);
    setError(null)
  }

  // console.log(weather)

  return (
    <>
    <Context.Provider value={{ apiCall, weatherData, error}}>
    <Container component="main" maxWidth="xs">
      <CssBaseline /> 
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Weather Finder
        </Typography>
        <WeatherSearch />
        { weatherData && <WeatherData />}
        { error && <Error error={error} /> }
        
      </div>

    </Container>
    </Context.Provider>
    </>
  );
}

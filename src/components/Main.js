
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';


const API_KEY = 'f00b2837b30336e775993079ebf43526';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=${API_KEY}`;


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Main() {
  
  const [weather, setWeather] = useState();
  const classes = useStyles();

  const apiCall = async (e) => {
    e.preventDefault();
    const request = axios.get(url);
    const response = await request;

    setWeather(response);
  }

  console.log(weather)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Forecast Finder
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                autoComplete="city"
                name="city"
                fullWidth
                id="city"
                label="City"
                autoFocus
                margin="normal"
              />
              
            </Grid>
            <Grid item xs={2}>
              <IconButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                
              >
                <SearchIcon onClick={apiCall} />
              </IconButton>
              </Grid>


          </Grid>
          
        </form>
      </div>

    </Container>
  );
}

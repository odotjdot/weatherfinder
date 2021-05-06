import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';

import { useStyles } from '../theme';

import Context from '../Context';

export default function WeatherSearch() {
  const classes = useStyles();
  const { apiCall } = useContext(Context);

  return (
    <Container>
      <form className={classes.form} onSubmit={apiCall} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                autoComplete="city"
                name="city"
                fullWidth
                id="city"
                label="City"
                autoFocus
              />
              
            </Grid>
            <Grid item xs={2}>
              <IconButton
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                
              >
                <SearchIcon/>
              </IconButton>
              </Grid>


          </Grid>
          
        </form>
      
    </Container>
  )
}

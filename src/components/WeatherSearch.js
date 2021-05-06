import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import { useStyles } from '../theme';

import Context from '../Context';

export default function WeatherSearch() {
  const classes = useStyles();
  const { apiCall } = useContext(Context);

  return (
    <div>
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
                margin="normal"
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
      
    </div>
  )
}

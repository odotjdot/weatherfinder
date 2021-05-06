import React, { useContext } from 'react';

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
    } = weatherData || {};
  
  console.log(weatherData)
  // console.log(new Date((sunrise + timezone) * 1000))
  return (
    <div>
      <div>City: { name }</div> 
      <div>Temperature: { temp }</div> 
      <div>Feels Like: { feels_like }</div> 
      <div>Humidity: { humidity }</div>  
      <div>Max Temp: { temp_max }</div> 
      <div>Min Temp: { temp_min }</div> 
      <div>Weather Descriptions: { weather[0].description }  </div> 
      
    </div>
  )
}

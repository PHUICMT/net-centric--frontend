import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function Weather(props) {
    const [weatherData, setWeatherData] = useState({
        weather: null,
        description: null,
        icon_src: null,
        temperature: null,
        feels_like: null,
        humidity: null
    });

    useEffect(() => {
        setWeatherData(props.weatherData);
    }, [props.weatherData]);

    return(weatherData ? (
        <Card sx={
            {display: 'flex'}
        }>
            <Box sx={
                {
                    display: 'flex',
                    flexDirection: 'column'
                }
            }>
                <CardContent sx={
                    {flex: '1 0 auto'}
                }>
                    <Typography component="div" variant="h5">
                        {
                        weatherData.weather
                    } </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {
                        weatherData.description
                    } </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        <br/>
                        <div>Temperature : {
                            weatherData.temperature
                        }
                            °C
                        </div>
                        <div>
                            Feels like : {
                            weatherData.feels_like
                        }
                            °C
                        </div>
                        <div>
                            Humidity : {
                            weatherData.humidity
                        }
                            %
                        </div>
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia component="img"
                sx={
                    {width: 151}
                }
                image={
                    weatherData.icon_src
                }
                alt={
                    weatherData.weather
                }/>
        </Card>
    ) : null);
}

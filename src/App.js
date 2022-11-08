import './App.css';
import MyMap from './components/map/map';
import {useState} from 'react';
import {Container, Typography, Button} from '@mui/material';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import axios from 'axios';

function App() {
    const [location, setLocation] = useState({lat: null, lng: null});
    const airportData = {
        name: null,
        country_code: null,
        distance: null
    }
    const [data, setData] = useState({
        country_code: null,
        country_name: null,
        country_currency_code: null,
        country_flag_src: null,
        exchange_rate: {
            rate: null,
            result: null
        },
        weather: {
            weather: null,
            description: null,
            icon_src: null,
            temperature: null,
            feels_like: null,
            humidity: null
        },
        airports: [airportData]
    });

    function setPosition(position) {
        setLocation({lat: position.lat, lng: position.lng});
    }

    function getDataLocation() {
        if (location.lat !== null && location.lng !== null) {
            let url = 'http://localhost:3001/getCountryData?lat=' + location.lat + '&lng=' + location.lng
            axios.get(url).then((response) => {
                console.log(response.data);
                setData(response.data);
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <div className='App'>
            <MyMap setPosition={setPosition}/>
            <Container>
                <Typography variant="h4" component="div" gutterBottom>
                    Latitude: {
                    location.lat
                } </Typography>
                <Typography variant="h4" component="div" gutterBottom>
                    Longitude: {
                    location.lng
                } </Typography>
                <Button variant="contained"
                    endIcon={<LocationSearchingIcon/>}
                    onClick={
                        () => getDataLocation()
                }>
                    LocationSearching
                </Button>
                {
                data.country_code !== null ? <div>
                    <Typography variant="h4" component="div" gutterBottom>
                        Country Code: {
                        data.country_code
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Country Name: {
                        data.country_name
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Country Currency Code: {
                        data.country_currency_code
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Country Flag: {
                        data.country_flag_src
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Exchange Rate: {
                        data.exchange_rate.rate
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Exchange Rate Result: {
                        data.exchange_rate.result
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Weather: {
                        data.weather.weather
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Weather Description: {
                        data.weather.description
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Weather Icon: {
                        data.weather.icon_src
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Weather Temperature: {
                        data.weather.temperature
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Weather Feels Like: {
                        data.weather.feels_like
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Weather Humidity: {
                        data.weather.humidity
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Airport Name: {
                        data.airports[0].name
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Airport Country Code: {
                        data.airports[0].country_code
                    } </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Airport Distance: {
                        data.airports[0].distance
                    } </Typography>
                </div> : null
            } </Container>
        </div>
    );
}

export default App;

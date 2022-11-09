import './App.css';
import MyMap from './components/map/map';
import {useState} from 'react';
import {Container, Button} from '@mui/material';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import axios from 'axios';

import {NotFound} from './components/notfound/notfound';
import {Loader} from './components/loader/loader';
import {Airports} from './components/airports/airports';
import {Country} from './components/country/country';
import {Weather} from './components/weather/weather';
import {Currency} from './components/currency/currency';
import {Location} from './components/location/location';

function App() {
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState({lat: null, lng: null});
    const [status, setStatus] = useState(null);
    const airportData = {
        name: undefined,
        country_code: undefined,
        distance: undefined
    }
    const [airports, setAirports] = useState(airportData);
    const [weatherData, setWeatherData] = useState({
        weather: undefined,
        description: undefined,
        icon_src: undefined,
        temperature: undefined,
        feels_like: undefined,
        humidity: undefined
    });
    const [countryData, setCountryData] = useState({
        country_code: undefined,
        country_name: undefined,
        country_currency_code: undefined,
        country_flag_src: undefined,
        exchange_rate: {
            rate: undefined,
            result: undefined
        }
    });

    function setPosition(position) {
        setLocation({lat: position.lat, lng: position.lng});
    }

    function getDataLocation() {
        if (location.lat !== null && location.lng !== null) {
            setLoading(true);
            let url = 'http://localhost:3001/getCountryData?lat=' + location.lat + '&lng=' + location.lng
            axios.get(url).then((response) => {
                setStatus(response.data.status);
                setCountryData({
                    country_code: response.data.country_code,
                    country_name: response.data.country_name,
                    country_currency_code: response.data.country_currency_code,
                    country_flag_src: response.data.country_flag_src,
                    exchange_rate: response.data.exchange_rate
                });
                setWeatherData(response.data.weather)
                setAirports(response.data.airports)
                setLoading(false);
            }).catch(() => {
                setStatus("error");
                setLoading(false);
            });
        }
    }

    return (
        <div className='App'>
            <MyMap setPosition={setPosition}/>
            <Container className='allData'>
                <Location latitute={
                        location.lat
                    }
                    longitude={
                        location.lng
                    }/>
                <Button variant="contained"
                    style={
                        {
                        borderRadius: 50,
                        }
                    }
                    color='success'
                    endIcon={<NotListedLocationIcon/>}
                    onClick={
                        () => getDataLocation()
                }>
                    Location Searching
                </Button>
                {
                ((countryData.country_code !== undefined && status === "success") ? (
                    <div className='dataContainer'>
                        <Airports airports={airports}/>
                        <div className='CountryContainer'>
                            <Country countryData={countryData}/>
                            <Weather weatherData={weatherData}/>
                            <Currency baseCurrency={
                                    countryData.country_currency_code
                                }
                                thbCurrency={
                                    countryData.exchange_rate.result
                                }/>
                        </div>
                    </div>
                ) : <NotFound notFound={
                        (status === "error")
                    }/>)
            }
                <Loader loading={loading}/></Container>
        </div>
    );
}

export default App;

import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function Country(props) {

    const [countryData, setCountryData] = useState({
        country_code: null,
        country_name: null,
        country_currency_code: null,
        country_flag_src: null,
        exchange_rate: {
            rate: null,
            result: null
        }
    });

    useEffect(() => {
        setCountryData(props.countryData);
    }, [props.countryData]);

    return(countryData.country_code ? (
        <Card sx={
            {maxWidth: 345}
        }>
            <CardMedia component="img" 
                image={
                    countryData.country_flag_src
                }
                alt="country_flag_src"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {
                    countryData.country_name
                } </Typography>
                <Typography variant="body2" color="text.secondary">
                    <div>
                        Country code : {
                        `${countryData.country_code}`.toUpperCase()
                    } </div>
                    <div>
                        Exchange rate : 1 {
                        countryData.country_currency_code
                    }
                        = {
                        countryData.exchange_rate.rate
                    }
                        THB
                    </div>
                </Typography>
            </CardContent>
        </Card>
    ) : null);
}

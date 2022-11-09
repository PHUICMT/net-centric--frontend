import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

export function Currency(props) {
    const [baseCurrency, setBaseCurrency] = useState(null);
    const [resultTHBCurrencyValue, setResultTHBCurrencyValue] = useState(null);
    const [baseAmount, setBaseAmount] = useState(1);
    const [THBAmount, setTHBAmount] = useState(0);

    useEffect(() => {
        setBaseCurrency(props.baseCurrency);
        setTHBAmount(props.thbCurrency);
        setResultTHBCurrencyValue(props.thbCurrency);
        setBaseAmount(1);
    }, 
    [
        props.baseCurrency,
        props.thbCurrency
    ]);

    const handleBaseAmountChange = (event) => {
        setBaseAmount(event.target.value);
        setTHBAmount(event.target.value * resultTHBCurrencyValue);

    };

    const handleTHBAmountChange = (event) => {
        setTHBAmount(event.target.value);
        setBaseAmount(event.target.value / resultTHBCurrencyValue);
    };

    return (
        <Box>
            <FormControl variant="standard">
                <Input id="standard-adornment-base-amount" value={
                    baseAmount
                } onChange={
                    handleBaseAmountChange
                } startAdornment={
                    <InputAdornment position="start">
                        {
                        baseCurrency
                    } </InputAdornment>
                }/>
                <FormHelperText id="standard-base-currency-helper-text">{baseCurrency} Currency</FormHelperText>
            </FormControl>

            <FormControl variant="standard">
                <Input id="standard-adornment-thb-amount" value={
                    THBAmount
                } onChange={
                    handleTHBAmountChange
                } startAdornment={
                    <InputAdornment position="start">THB</InputAdornment>
                }/>
                <FormHelperText id="standard-thb-currency-helper-text">THB Currency</FormHelperText>
            </FormControl>
        </Box>
    );
}

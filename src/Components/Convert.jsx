/* eslint-disable react/jsx-no-bind */
import {
  Card,
  CardContent,
  Grid,
  TextField,
  CardActions,
  Button,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { AccountCircle } from "@mui/icons-material";
import currencyService from "../ApiCalls/currencyService";
import componentHelper from "./componentHelper";
var _ = require("lodash");

const Convert = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("COP");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(50000);
  const [valueConverted, setValueConverted] = useState(null);

  function handleChange(event) {
    // gives the value of the targetted element
    const { value } = event.target;
    const inputName = event.target.name;
    if (inputName === "amount") {
      setAmount(value);
    }
  }

  const handleChangeFromSelector = (event) => {
    const { value } = event.target;
    setFromCurrency(value);
  };

  const handleChangeToSelector = (event) => {
    const { value } = event.target;
    setToCurrency(value);
  };

  const handleConvertion = (e) => {
    e.preventDefault();
    const res = currencyService.convertCurency({
      value: amount,
      fromCurrency: fromCurrency,
      toCurrency: toCurrency,
    });
    res
      .then((val) => {
        const value = _.get(val, "data.valueConverted");
        if (value) {
          setValueConverted(value);
        }
      })
      .catch(console.error);
  };

  useEffect(() => {
    const res = currencyService.getCurrencies();
    res
      .then((val) => {
        const data = _.get(val, "data.data");
        const options = componentHelper.genCurrencySelectorOptions(data);
        setCurrencies(options);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setValueConverted(null);
  }, [amount, fromCurrency, toCurrency]);

  return (
    <Card sx={{ width: 1000 }}>
      <CardContent>
        <Grid
          container
          spacing={0.5}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {valueConverted ? (
            <Grid item xs={12} md={12}>
              <Typography variant="h4" component="h2">
                {amount} {fromCurrency} are{" "}
                {(Math.round(valueConverted * 100) / 100).toFixed(2)}{" "}
                {toCurrency}
              </Typography>
              <br />
            </Grid>
          ) : null}
          <Grid item xs={4}>
            <TextField
              id="amount"
              name="amount"
              value={amount}
              label="Amount"
              variant="standard"
              type="number"
              onChange={handleChange}
              InputLabelProps={{
                startadornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
                shrink: true,
              }}
              fullWidth
            />
          </Grid>

          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-select-small-label">From</InputLabel>
              <Select
                labelId="select"
                id="select-currency"
                label="From"
                value={fromCurrency}
                onChange={handleChangeFromSelector}
                fullWidth
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-select-small-label">To</InputLabel>
              <Select
                labelId="select"
                id="select-currency"
                label="To"
                value={toCurrency}
                onChange={handleChangeToSelector}
                fullWidth
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={handleConvertion}>
          Convert
        </Button>
      </CardActions>
    </Card>
  );
};

export default Convert;

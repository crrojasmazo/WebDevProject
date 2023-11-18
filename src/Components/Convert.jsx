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
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { AccountCircle } from "@mui/icons-material";
import currencyService from "../ApiCalls/currencyService";
import componentHelper from "./componentHelper";
var _ = require("lodash");

const Convert = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleChange(event) {
    // gives the value of the targetted element
    const { value } = event.target;
    const inputName = event.target.name;
    if (inputName === "amount") {
      setAmount(value);
    } else if (inputName === "from") {
      setFrom(value);
    } else if (inputName === "to") {
      setTo(value);
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

  useEffect(() => {
    const res = currencyService.getCurrencies();
    res
      .then((val) => {
        const data = _.get(val, "data.data");
        console.log(data);
        const options = componentHelper.genCurrencySelectorOptions(data);
        setCurrencies(options);
      })
      .catch(console.error);
  }, []);

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
        <Button size="small" variant="contained">
          Convert
        </Button>
      </CardActions>
    </Card>
  );
};

export default Convert;

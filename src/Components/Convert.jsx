/* eslint-disable react/jsx-no-bind */
import {
  Card, CardContent, Grid, IconButton, TextField, CardActions, Button, InputAdornment,
} from '@mui/material';
import React, { useState } from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import { AccountCircle } from '@mui/icons-material';

const Convert = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  function handleChange(event) {
    // gives the value of the targetted element
    const { value } = event.target;
    const inputName = event.target.name;
    if (inputName === 'amount') {
      setAmount(value);
    } else if (inputName === 'from') {
      setFrom(value);
    } else if (inputName === 'to') {
      setTo(value);
    }
  }

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
          <Grid item xs={3.75}>

            <TextField
              id="from"
              value={from}
              name="from"
              label="From"
              variant="outlined"
              onChange={handleChange}
              fullWidth
            />

          </Grid>
          <Grid item xs={0.5}>
            <IconButton>
              <CachedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3.75}>

            <TextField
              id="to"
              value={to}
              name="to"
              label="To"
              variant="outlined"
              onChange={handleChange}
              fullWidth
            />

          </Grid>

        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Convert</Button>
      </CardActions>
    </Card>
  );
};

export default Convert;

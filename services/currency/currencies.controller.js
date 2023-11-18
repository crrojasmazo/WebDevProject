const _ = require("lodash");
const asyncMiddleware = require("../../middleware/asyncMiddleware");
const dotenv = require("dotenv").config({ path: "src/.env" });

const CURRENCYAPI = process.env.CURRENCYAPI;

const getCurrencyNames = asyncMiddleware(async (_req, res) => {
  const response = await fetch(
    `https://api.currencyapi.com/v3/currencies?apikey=${CURRENCYAPI}&currencies=`
  );
  const currency = await response.json();
  res.status(200).send(currency);
});

const convertCurrency = asyncMiddleware(async (req, res) => {
  const { value, fromCurrency, toCurrency } = req.body;

  const response = await fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${CURRENCYAPI}&currencies=${fromCurrency}%2C${toCurrency}`
  );
  const data = await response.json();
  const currency = _.get(data, "data");
  const fromCurrencyValue = _.get(currency, `${fromCurrency}.value`);
  const toCurrencyValue = _.get(currency, `${toCurrency}.value`);
  const exchangeRate = fromCurrencyValue / toCurrencyValue;
  const valueConverted = value / exchangeRate;
  res.status(200).send({ valueConverted });
});

module.exports = {
  getCurrencyNames,
  convertCurrency,
};

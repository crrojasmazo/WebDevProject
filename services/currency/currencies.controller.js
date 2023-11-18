const asyncMiddleware = require("../../middleware/asyncMiddleware");
const dotenv = require("dotenv").config({ path: "src/.env" });

const CURRENCYAPI = process.env.CURRENCYAPI;

const getCurrencyNames = asyncMiddleware(async (_req, res) => {
  const response = await fetch(
    `https://api.currencyapi.com/v3/currencies?apikey=${CURRENCYAPI}&currencies=`
  );
  const currency = await response.json();

  console.log(currency);
  res.status(200).send(currency);
});

module.exports = {
  getCurrencyNames,
};

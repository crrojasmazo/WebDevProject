const express = require("express");
const {
  getCurrencyNames,
  convertCurrency,
} = require("./currencies.controller");

const currencyRouter = express.Router();

currencyRouter.route("/").get(getCurrencyNames);

currencyRouter.route("/convert").post(convertCurrency);

module.exports = currencyRouter;

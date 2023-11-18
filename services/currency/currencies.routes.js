const express = require("express");
const { getCurrencyNames } = require("./currencies.controller");

const currencyRouter = express.Router();

currencyRouter.route("/").get(getCurrencyNames);

module.exports = currencyRouter;

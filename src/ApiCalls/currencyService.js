import api from "./api";

const prefix = "currency";

const getCurrencies = async (currency) => await api.get(`${prefix}/`, currency);

const convertCurency = async (data) =>
  await api.post(`${prefix}/convert`, data);

const currencyService = {
  getCurrencies,
  convertCurency,
};

export default currencyService;

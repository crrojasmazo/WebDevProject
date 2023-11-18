import api from "./api";

const prefix = "currency"

const getCurrencies = async ( currency ) => await api.get(`${prefix}/`, currency)

const currencyService = {
    getCurrencies,
}

export default currencyService
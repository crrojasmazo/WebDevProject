const genCurrencySelectorOptions = (data) => {
    const dataCopied = JSON.parse(JSON.stringify(data));
    const selectorValues = Object.keys(dataCopied)
    console.log('xd')
    console.log(selectorValues)
    return selectorValues
}


const componentHelper = {
    genCurrencySelectorOptions,
}

export default componentHelper
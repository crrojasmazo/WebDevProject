const genCurrencySelectorOptions = (data) => {
  const dataCopied = JSON.parse(JSON.stringify(data));
  const selectorValues = Object.keys(dataCopied);
  return selectorValues;
};

const componentHelper = {
  genCurrencySelectorOptions,
};

export default componentHelper;

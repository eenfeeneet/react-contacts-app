const countryList = require('./countries');
const countryPhone = require('./phone');

export function getAllCountryCodes() {
  return Object.entries(countryPhone).sort((a, b) => (a[1] > b[1] ? 1 : -1));
}

export function getCountryByCountryCode(countryCode) {
  return countryList[countryCode];
}

export function getAllCountries() {
  return Object.entries(countryList).sort((a, b) => (a[1] > b[1] ? 1 : -1));
}

export function getPhoneCountryCodeByISO2(ISO2) {
  return countryPhone[ISO2];
}

export function getCountryCodeByCountry(country) {
  return Object.entries(countryList).find(([key, value]) => value === country)[0];
}

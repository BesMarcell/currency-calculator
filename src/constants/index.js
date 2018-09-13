export const Endpoints = {
  BASE_URL: 'http://hnbex.eu/api/v1/rates',
  DAILY: 'daily',
  DATE: 'date',
};

export const TODAY = new Date().toISOString().substring(0, 10);

export default Endpoints;

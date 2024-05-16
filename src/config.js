// src/config.js
const dev = {
  API_BASE_URL: 'http://127.0.0.1:8000/api',
};

const prod = {
  API_BASE_URL: 'http://robrobot-loadbalancer-980562543.eu-west-2.elb.amazonaws.com:8000/api',
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default config;
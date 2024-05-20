const dev = {
  API_BASE_URL: process.env.REACT_APP_DOCKER_ENV === 'true' ? process.env.REACT_APP_API_BASE_URL_DOCKER : process.env.REACT_APP_API_BASE_URL_DEV,
};

const prod = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL_PROD,
};

const isProduction = process.env.REACT_APP_NODE_ENV === 'production';
console.log('NODE_ENV:', process.env.REACT_APP_NODE_ENV);
console.log('Is Production:', isProduction);

const config = isProduction ? prod : dev;
console.log('API Base URL:', config.API_BASE_URL);

// Additional logging to ensure environment variables are set correctly
console.log('REACT_APP_DOCKER_ENV:', process.env.REACT_APP_DOCKER_ENV);
console.log('REACT_APP_API_BASE_URL_DOCKER:', process.env.REACT_APP_API_BASE_URL_DOCKER);
console.log('REACT_APP_API_BASE_URL_DEV:', process.env.REACT_APP_API_BASE_URL_DEV);
console.log('REACT_APP_API_BASE_URL_PROD:', process.env.REACT_APP_API_BASE_URL_PROD);

export default config;

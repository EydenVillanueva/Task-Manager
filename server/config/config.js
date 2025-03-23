export default {
  server: {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'DEV',
    API_VERSION: process.env.API_VERSION || 'v1',
  },
};

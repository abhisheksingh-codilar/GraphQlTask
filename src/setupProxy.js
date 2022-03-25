const { createProxyMiddleware } = require('http-proxy-middleware');
const GRAPHQL_ENDPOINT = "https://wingreens-dev.codilar.in/graphql/"
module.exports = function (app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: GRAPHQL_ENDPOINT,
      changeOrigin: true,
    })
  );
};
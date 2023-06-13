const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Create a proxy middleware instance
const proxyMiddleware = createProxyMiddleware({
  target: 'http://192.168.1.68:3000',
  changeOrigin: true,
});

// Use the proxy middleware for all requests
app.use('/', proxyMiddleware);

app.listen(5173, () => {
  console.log('Proxy server listening on port 5173');
});

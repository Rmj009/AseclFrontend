const express = require('express');
const cors = require('cors');

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Create a proxy middleware instance
const proxyMiddleware = createProxyMiddleware({
  target: 'http://192.168.42.230:8081',
  changeOrigin: true,
});

// Use the proxy middleware for all requests
app.use('/', proxyMiddleware);

app.use(cors({
  origin: 'http://192.168.42.230:8081'
}));

app.listen(5173, () => {
  console.log('Proxy server listening on port 5173');
});

const cors = require('cors');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://192.168.1.231:8081',
  // Additional options if needed
}));

// Proxy API requests to the backend server (if needed)
app.use('/api', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

// Serve the Vue.js application
app.use(express.static('dist'));

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Development server running on port ${port}`);
});

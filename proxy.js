const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define your API endpoint and target URL
const apiProxy = createProxyMiddleware('/api', {
  target: 'http://localhost:8081', // Change this to your backend server URL
  changeOrigin: true, // Needed for virtual hosted sites
  ws: true, // Proxy websockets
});

// Proxy requests to your backend server
app.use('/api', apiProxy);

// Start the proxy server
const port = process.env.PORT || 4200; // Use port 4200 by default
app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});

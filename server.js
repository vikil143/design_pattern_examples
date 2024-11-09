// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

// Route for serving the HTML file
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, './src/public/design-patterns/index.html'));
  res.sendFile(path.join(__dirname, "./src/js/apps/todos/index.html"))
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
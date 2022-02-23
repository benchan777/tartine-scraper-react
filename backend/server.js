require('dotenv').config();
const port = 3001;
const express = require('express');
const menuData = require('./src/routes/menuData');
const cors = require('cors');

// Initialize App
const app = express();

// Use Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(cors());
app.use('/api', menuData);

app.get("/", (req, res) => {
  return res.json({ response: "Hello World" });
});

// Start server
app.listen(port, () => {
	console.log(`Tartine scraper listening on ${port}`);
});

module.exports = app;

const express = require('express');
const router = express.Router();
const { menuScraper } = require('../controllers/scraper')

router.get('/scraper', (req, res) => {
  menuScraper();
  console.log('Test');
});

module.exports = router;
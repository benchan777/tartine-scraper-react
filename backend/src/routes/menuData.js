const express = require('express');
const router = express.Router();
const { menuScraper } = require('../controllers/scraper');

router.get('/scraper', (req, res) => {
  menuScraper()
    .then(result => {
      // const menuItems = result['menus'][0]['menuItems'];
      // Object.keys(menuItems).forEach(key => {
      //   console.log(menuItems[key]['name_for_customer']);
      // });
      res.json(result);
    })
    .catch(error => {
      res.json({ Error: error });
    });
});

module.exports = router;
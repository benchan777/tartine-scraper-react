require('dotenv').config();
const axios = require('axios');
const url = 'https://api.guerrero.tartine.menu/api/cached/menu-data?host=guerrero.tartine.menu&ids[]=840a9600-8e13-47cb-b08b-85db705c6e51';

const menuScraper = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: url,
    })
      .then(response => {
        const data = response.data
        resolve(data);
      })
      .catch(error => {
        reject(`Error at axios: ${error.message}`);
      });
  });
};

module.exports = { menuScraper };
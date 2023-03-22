var express = require('express');
var router = express.Router();
const axios = require("axios");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/weather/:city', async function(req, res, next) {
  const getWeather = async (India) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: {q: `${req.params.city}`},
      headers: {
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        'x-rapidapi-key': '28c93b742amshbb546febf21c2c0p1f3c8ajsn0dc3cb179cc7'
      
      }
    };
  
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const weatherData = await getWeather(req.params.location);
  res.render( 'index');
  
});

router.get('/about', function(req, res, next) {
  res.render('index');
});

router.get('/contact', function(req, res, next) {
  res.render('index');
});
 





module.exports = router;

var express = require('express');
var router = express.Router();
const axios = require("axios");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/weather', async function(req, res, next) {
  const location = req.body.location;
  const getWeather = async () => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: {q: location},
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
  const weatherData = await getWeather();
  res.render('info' , {weatherData});
  
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('index');
});
 


module.exports = router;

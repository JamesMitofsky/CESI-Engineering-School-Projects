const express = require('express');
const Restaurant = require('../models/Restaurant');
const { addNewRestaurant, getAllRestaurants } = require('../controllers/restaurantController');

const router = express.Router();

router.post('/restaurant', addNewRestaurant)
router.get('/restaurant', getAllRestaurants)

module.exports = router;
const mongoose = require('mongoose');
const {restaurantSchema} = require("../models/Restaurant");

const Restaurant = mongoose.model("Restaurant", restaurantSchema);


const addNewRestaurant = (req, res) => {
    let newRestaurant = new Restaurant (req.body);
    newRestaurant.save()
        .then(answer => res.send(answer))
        .catch(err => res.status(500).send(err));
}

const getAllRestaurants = (req, res) => {
    Restaurant.find()
        .then(answer => res.send(answer))
        .catch(err => res.status(500).send(err));
};


module.exports = { addNewRestaurant, getAllRestaurants};
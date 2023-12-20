const mongoose = require('mongoose');
const {restaurantSchema} = require("../models/Restaurant");

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

const addNewRestaurant = (req, res) => {
    let newRestaurant = new Restaurant (req,body);
    newRestaurant.save((err,answer) =>{
        if(err){(err,answer)}
        else{
            res.send(answer);
        }
    })
}

const getAllRestaurants = (req, res) => {
    Restaurant.find({}, (err,answer) => {
        if(err){res.send(err)}
        else{
            res.send(answer);
        }
    })
}

module.exports = { addNewRestaurant, getAllRestaurants};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: 'Enter Name'
    },
    genre:{
        type: String,
        default: 'Enter Genre'
    },
    created_date:{
        type: Date,
        default: Date.now()
    }
});

module.exports = { restaurantSchema, };
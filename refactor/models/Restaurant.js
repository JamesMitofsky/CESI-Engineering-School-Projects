const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: 'Enter Name'
    },
    created_date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('restaurant', restaurantSchema);
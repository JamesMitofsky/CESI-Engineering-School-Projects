const express = require('express');
const Restaurant = require('../models/Restaurant');

const router = express.Router();

//Créer un nouveau resto
router.post('/restaurant', async (req, res) =>{
    const{name } = req.body;

    try{
        const restaurant = new Restaurant({ name });
        await restaurant.save();
        res.send(restaurant);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

//Récupérer des restos
router.get('/restaurant', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({}); // Utilisez le modèle correct ici
        res.send(restaurants);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
module.exports = router;
const express = require('express');
const router = express.Router();
const HotelModel = require('../models/hotel');

router.get('/', (req, res) => {
    HotelModel.find({}, function(err, hotels) {
        res.json({
            success: true,
            data: hotels
        });
    });
});

router.get('/:id', (req, res) => {
    HotelModel.findOne({ id: req.params.id }, function(err, hotels) {
        res.json({
            success: true,
            data: hotels
        });
    });
});

router.post('/', (req, res) => {
    // return 
});

router.put('/', (req, res) => {
    // return 
});

router.delete('/', (req, res) => {
    // return hotels
});

module.exports = router;
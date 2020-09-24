const mongoose = require('mongoose');
const { collection } = require('./restaurant');

const HotelSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: Number,
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory: Number
}, { collection: 'hotel' })

const hotel = mongoose.model('Hotel', HotelSchema);

module.exports = hotel;
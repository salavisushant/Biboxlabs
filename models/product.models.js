const mongoose = require('mongoose');

const cartoonSchema = new mongoose.Schema({
    name: { type: String },
    image: { type: String },
    price: { type: String },
}, { 
    timestamps: true,
    versionKey:false,
});

module.exports = mongoose.model('cartoonData',cartoonSchema)
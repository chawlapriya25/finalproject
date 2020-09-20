var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    quantity:
    {
        type: Number,
        required :true
    }
});

module.exports = mongoose.model('products', ProductSchema);

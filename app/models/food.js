var mongoose = require('mongoose');

// Collection model for 'Food items'
module.exports = mongoose.model('Food',{

    // Name of the food
    name: {
        type: String,
        default: ''
    },

    // Price of the food
    price: {
        type: Number,
        default: 0
    },

	quantity: {
        type: Number,
        default: 0
    }

});

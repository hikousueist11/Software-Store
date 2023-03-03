const mongoose = require("mongoose");

const carts_Schema = new mongoose.Schema({
	sessionID: String,
	cart: Array,
	// auto delete this after 3600 * 24 seconds
    // start_at: {type: Date, default: Date.now, index: { expires: '5m'  }} 
});

const Carts = mongoose.model('Carts', carts_Schema, 'Carts');


module.exports = Carts;
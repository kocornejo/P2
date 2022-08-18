const mongoose = require('mongoose');

// Create your User Model
const userSchema = new mongoose.Schema({
	name: String,
	googleId: {
		type: String,
		required: true
	},
	email: String,
	game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
}, {
	timestamps: true
});


module.exports = mongoose.model('User', userSchema);
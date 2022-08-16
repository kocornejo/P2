const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        content: String,
        rating: {type: Number,min: 1, max: 10, default: 5 },
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        userName: String,
    },
    {
        timestamps: true,
    }
);





const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number,
        default: function () {
            return new Date().getFullYear();
        },
    },
    reviews: [reviewSchema],
});

module.exports = mongoose.model("Game", gameSchema);
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        content: String,
        rating: String,
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
    system: String,

    reviews: [reviewSchema],
});

module.exports = mongoose.model("Game", gameSchema);
const Game = require("../models/game");

module.exports = {
    index
};

function index(req, res) {
    res.render("games/index.ejs")
}
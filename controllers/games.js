const Game = require("../models/game");

module.exports = {
    index,
    create,
    show,
    new: newGame,
};

function show(req, res) {
    res.render("games/show", {
    })
};

function newGame(req, res) {
    res.render("games/new.ejs")
};

function create(req, res) {
    res.redirect(`/games`)
};



function index(req, res) {
    Game.find({}, function (err, allGames) {

      res.render("games/index.ejs", {
        games: allGames,
      });
    });
  }
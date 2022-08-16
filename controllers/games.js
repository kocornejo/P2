const Game = require("../models/game");

module.exports = {
    index,
    create,
    show,
    new: newGame,
};

async function show(req, res) {
   
    try {
      const gameDocument = await Game.findById(req.params.id)
                                        .exec()
      res.render("games/show", {
        title: "Game Detail",
        game: gameDocument,
      });
  
    } catch(err){
      res.send(err);
    }
}

function newGame(req, res) {
    res.render("games/new.ejs")
};

function create(req, res) {
    Game.create(req.body, function (err, gameDocs){
    res.redirect(`/games/${gameDocs._id}`);
})
};


function index(req, res) {
    Game.find({}, function (err, allGames) {

      res.render("games/index.ejs", {
        games: allGames,
      });
    });
  }
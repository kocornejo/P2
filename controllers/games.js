const Game = require("../models/game");

module.exports = {
    index,
    create,
    show,
    new: newGame,
};

async function show(req, res) {
    let user = false
    if (req.user) {
        user = req.user.id
    }
    console.log("user", user)
    try {
        const gameDocument = await Game.findById(req.params.id)
            .exec()
        console.log('this is game document', gameDocument, "this is the user", req.user)
        res.render("games/show", {
            title: "Game Detail",
            game: gameDocument,
            user
        });

    } catch (err) {
        res.send(err);
    }
}

function newGame(req, res) {
    console.log("hitting new game function");
    // console.log(res);
    res.render("games/new")
};

function create(req, res) {
    req.body.userId = req.user._id
    Game.create(req.body, function (err, gameDocs) {
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
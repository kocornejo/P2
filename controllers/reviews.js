const Game = require('../models/game');

module.exports = {
    create,
    updateReview,
    edit,
    deleteReview
};

function updateReview(req, res) {

    Game.findOne({ 'review._id': req.params.id }, function (err, game) {

        const reviewSubdoc = game.reviews.id(req.params.id);

        reviewSubdoc.content = req.body.content;
        reviewSubdoc.rating = req.body.rating;

        game.save(function (err) {

            res.redirect(`/games/${game._id}`);
        });
    });
}

function edit(req, res) {
    Game.findOne({ 'reviews._id': req.params.id }, function (err, game) {

        const review = game.reviews.id(req.params.id);

        res.render('games/edit', { review });
    });
}

async function deleteReview(req, res) {
    console.log(req.params)
    try {

        const gameDocument = await Game.findOne({
            'reviews._id': req.params.id,
            'reviews.user': req.user._id
        });
        if (!gameDocument) return res.redirect('/games');
        gameDocument.reviews.remove(req.params.id);

        await gameDocument.save();
        res.redirect(`/games/${gameDocument._id}`)

    } catch (err) {
        res.send(err)
    }
};

function create(req, res) {
    Game.findById(req.params.id, function (err, gameDocument) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;

        gameDocument.reviews.push(req.body);
        gameDocument.save(function (err) {
            res.redirect(`/games/${req.params.id}`);
        });
    });
};

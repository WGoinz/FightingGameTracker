Stats = require("../models/Stats")
Character = require("../models/Character")
Profile = require("../models/Profile")

const statsController = {
    index: (req, res) => {
        const characterId = req.params.characterId
        const profileId = req.params.id
        Character.findById(characterId).populate("stats").then(character => {
            const stats = character.stats
            res.render('stats/index', { stats, character, profileId, characterId })
        })
    },
    new: (req, res) => {
        const profileId = req.params.id
        const characterId = req.params.characterId
        res.render("stats/new", { profileId, characterId })
    },
    create: (req, res) => {
        const profileId = req.params.id
        const characterId = req.params.characterId
        Character.findById(characterId).then((character) => {
            Stats.create({
                tournamentName: req.body.tournamentName,
                wins: req.body.wins,
                losses: req.body.losses,
                matches: req.body.matches,
                victoryPercentage: req.body.victoryPercentage
            }).then(stat => {
                character.stats.push(stat)
                character.save()
                res.redirect(`/${profileId}/characters/${characterId}/stats`)
            })
        })
    }
}
module.exports = statsController
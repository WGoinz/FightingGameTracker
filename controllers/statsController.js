Stats = require("../models/Stats")
Character = require("../models/Character")
Profile = require("../models/Profile")

const statsController = {
    index: (req, res) => {
        const characterId = req.params.characterId
        const profileId = req.params.id
        Stats.find({}).then(stat => {
            res.render('stats/index', { stat, profileId, characterId })
        })
    }
}
module.exports = statsController
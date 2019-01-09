Character = require("../models/Character")

const characterController = {
    index: (req, res) => {
        Character.find({}).then(character => {
            res.render('character/index', { character })
        })
    }
}

module.exports = characterController
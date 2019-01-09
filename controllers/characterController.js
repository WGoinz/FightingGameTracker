Character = require("../models/Character")
Profile = require("../models/Profile")

const characterController = {
    index: (req, res) => {
        Character.find({}).then(character => {
            res.render('character/index', { character })
        })
    },
    new: (req, res) => {
        const profileId = req.params.id
        console.log("New view")
        res.render("character/new", { profileId })
    },
    create: (req, res) => {
        const profileId = req.params.id
        Profile.findById(profileId).then((profile) => {
            Character.create({
                name: req.body.name,
                archetype: req.body.archetype,
                characterImg: req.body.characterImg,
                stamina: req.body.stamina
            }).then(character => {
                profile.characters.push(character)
                profile.save()
                res.redirect(`/${profile._id}`)
            })
        })
    },
    show: (req, res) => {
        const characterId = req.params.characterId
        const profileId = req.params.id
        Character.findById(characterId).then((character) => {
            res.render('character/show', { character, profileId })
        })
    }
}

module.exports = characterController
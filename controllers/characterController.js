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
        res.render("character/new", {profileId})
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
        const profileId = req.params.id
        Profile.findById(profileId).populate("characters").then((profile) => {
            // console.log(profile)
            const characters = profile.characters
            res.render('character/show', { characters, profile })
        })
    }
}

module.exports = characterController
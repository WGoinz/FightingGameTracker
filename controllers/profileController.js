Profile = require("../models/Profile")

const profileController = {
    index: (req, res) => {
        Profile.find({}).then(profile => {
            res.render('profile/index', { profile })
        })
    },
    new: (req, res) => {
        res.render("profile/new")
    },
    create: (req, res) => {
        Profile.create({
            username: req.body.username,
            profilePic: req.body.profilePic,
            slogan: req.body.slogan,
            email: req.body.email
        }).then(newProfile => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        const profileId = req.params.id
        Profile.findById(profileId).populate("characters").then((profile) => {
            const characters = profile.characters
            res.render('profile/show', { characters, profile })
        })
    },
    edit: (req, res) => {
        const profileId = req.params.id
        Profile.findById(profileId).then(profile => {
            res.render('profile/edit', { profile, profileId })
        })
    },
    update: (req, res) => {
        const profileId = req.params.id
        Profile.findByIdAndUpdate(profileId, req.body, { new: true }).then((profile) => {
            res.redirect(`/${profileId}`)
        })
    },
    delete: (req, res) => {
        const profileId = req.params.id
        Profile.findByIdAndRemove(profileId).then(() => {
            res.redirect('/')
        })
    },
    removeChar: (req, res) => {
        const profileId = req.params.id
        const charId = req.params.charId
        Profile.findByIdAndUpdate(profileId, { $pull: { characters: charId } }).then(() => {
            console.log("Removed")
        }).then(() => {
            res.redirect(`/${profileId}`)
        })

    }
}


module.exports = profileController
Profile = require("../models/Profile")

const profileController = {
    index: (req, res) => {
        // console.log("Profile controller working")
        Profile.find({}).then(profile => {
            res.render('profile/index', { profile })
        })
    },
    new: (req, res) => {
        console.log("New view")
        res.render("profile/new")
    },
    create: (req, res) => {
        // console.log(req.body)
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
        Profile.findById(profileId).then((profile) => {
            // console.log(profile)
            res.render('profile/show', { profile })
        })
    },
    edit: (req, res) => {
        const profileId = req.params.id
        res.render('profile/edit', { profileId })
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
    }

}
module.exports = profileController
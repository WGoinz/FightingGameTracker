Profile = require("../models/Profile")

const profileController = {
    index: (req, res) => {
        console.log("Profile controller working")
        Profile.find({}).then(profile => {
            res.render('profile/index', { profile })
        })
    },
    new: (req, res) => {
        console.log("New view")
        res.render("profile/new")
    },
    create: (req, res) => {
        console.log(req.body)
        Profile.create({
            username: req.body.username,
            profilePic: req.body.profilePic,
            slogan: req.body.slogan,
            email: req.body.email
        }).then(newProfile => {
            res.redirect('profile/index')
        })
    }
}
module.exports = profileController
Profile = require("../models/Profile")

const profileController = {
    index: (req, res) => {
        console.log("Profile controller working")
        res.render("profile/index")
    },
    new: (req, res) => {
        res.render("profile/new")
    },
    create: (req, res) => {
        console.log(req.body)
        res.redirect("/")
    }
}
module.exports = profileController
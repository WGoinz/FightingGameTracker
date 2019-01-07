Profile = require("../models/Profile")

const profileController = {
    index: (req, res) => {
        console.log("Profile controller working")
        res.render("profile/index")
    }
}
module.exports = profileController
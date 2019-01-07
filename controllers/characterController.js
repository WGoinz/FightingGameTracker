Character = require("../models/Character")

const characterController = {
    index: (req, res) => {
        console.log("Character controller working")
        res.send("Character controller working")
    }
}

module.exports = characterController
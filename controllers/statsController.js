Stats = require("../models/Stats")

const statsController = {
    index: (req, res) => {
        console.log("Stats controller working")
        res.send("Stats controller working")
    }
}

module.exports = statsController
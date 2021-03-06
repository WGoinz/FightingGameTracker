const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Stats = new Schema({
    tournamentName: String,
    wins: Number,
    losses: Number,
    matches: Number,
    victoryPercentage: Number
});

module.exports = mongoose.model("Stats", Stats)
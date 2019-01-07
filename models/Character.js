const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Character = new Schema({
    name: String,
    archetype: String,
    stamina: Number,
    stats: [{
        type: Schema.Types.ObjectId,
        ref: 'Stats'
    }]
});

module.exports = mongoose.model("Character", Character)
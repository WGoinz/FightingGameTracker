const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Profile = new Schema({
    username: String,
    profilePic: String,
    slogan: String,
    email: String,
    characters: [{
        type: Schema.Types.ObjectId,
        ref: 'Character'
    }]
});

module.exports = mongoose.model("Profile", Profile)
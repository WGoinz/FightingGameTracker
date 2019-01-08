const Character = require('../models/Character')
const Profile = require('../models/Profile')
const Stats = require('../models/Stats')

Profile.deleteMany({})
    .then(() => {
        return Profile.create({
            username: "Ryu",
            profilePic: "https://imgur.com/gallery/EuDyMPK",
            slogan: "The answer lies in the heart of battle",
            email: "ryu@capcom.com",
            characters: []
        }).then((profile) => {
            // console.log("this is the " + profile)
            const newChar = Character.create({
                name: "Ibuki",
                archetype: "Offensive",
                stamina: 950,
                stats: []
            }).then((character) => {
                profile.characters.push(character)
                // console.log("profile is now" + profile)
            }).then((completeProfile) => {
                // console.log(profile)
                const newStat = Stats.create({
                    tournamentName: "Kumite in Tennessee",
                    wins: 5,
                    losses: 1,
                    matches: 6,
                    victoryPercentage: 83
                })
            }).then((stat) => {
                // console.log(profile)
                profile.characters[0].stats.push(stat)
                console.log(profile)
            })

            Promise.resolve(newChar)
                .then(() => {
                    profile.save()
                })
        })
    })
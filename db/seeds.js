const Character = require('../models/Character')
const Profile = require('../models/Profile')
const Stats = require('../models/Stats')

Stats.deleteMany({}).then(() => {
    Character.deleteMany({}).then(() => {
        Profile.deleteMany({})
            .then(() => {
                return Profile.create({
                    username: "Ryu",
                    profilePic: "https://i.imgur.com/cvpuu7I.png",
                    slogan: "The answer lies in the heart of battle",
                    email: "ryu@capcom.com",
                    characters: []
                }).then((profile) => {
                    const newChar = Character.create({
                        name: "Ibuki",
                        archetype: "Offensive",
                        stamina: 950,
                        stats: []
                    }).then((character) => {
                        profile.characters.push(character)

                    })
                    const newChar2 = Character.create({
                        name: "Ryu",
                        archetype: "Balanced",
                        stamina: 1000,
                        stats: []
                    }).then((character) => {
                        profile.characters.push(character)
                    }).then((stat) => {
                        const newStat = Stats.create({
                            tournamentName: "Kumite in Tennessee",
                            wins: 5,
                            losses: 1,
                            matches: 6,
                            victoryPercentage: 83
                        }).then((stat) => {
                            profile.characters[0].stats.push(stat)
                        })

                        const newStat2 = Stats.create({
                            tournamentName: "Kumite in Tennessee",
                            wins: 5,
                            losses: 5,
                            matches: 10,
                            victoryPercentage: 50
                        }).then((stat) => {
                            profile.characters[1].stats.push(stat)
                        })
                        Promise.all([newChar, newStat], [newChar2, newStat2])
                            .then(() => {
                                profile.save()
                                console.log(profile)
                            })
                    })
                }).then(() => {
                    return Profile.create({
                        username: "Yung Damage",
                        profilePic: "https://i.imgur.com/cvpuu7I.png",
                        slogan: "The answer lies in the heart of battle",
                        email: "yungdamage@capcom.com",
                        characters: []
                    }).then((profile) => {
                        const newChar = Character.create({
                            name: "Ibuki",
                            archetype: "Offensive",
                            stamina: 950,
                            stats: []
                        }).then((character) => {
                            profile.characters.push(character)

                        })
                        const newChar2 = Character.create({
                            name: "Ryu",
                            archetype: "Balanced",
                            stamina: 1000,
                            stats: []
                        }).then((character) => {
                            profile.characters.push(character)
                        }).then((stat) => {
                            const newStat = Stats.create({
                                tournamentName: "Kumite in Tennessee",
                                wins: 5,
                                losses: 1,
                                matches: 6,
                                victoryPercentage: 83
                            }).then((stat) => {
                                profile.characters[0].stats.push(stat)
                            })

                            const newStat2 = Stats.create({
                                tournamentName: "Kumite in Tennessee",
                                wins: 5,
                                losses: 5,
                                matches: 10,
                                victoryPercentage: 50
                            }).then((stat) => {
                                profile.characters[1].stats.push(stat)
                            })
                            Promise.all([newChar, newStat], [newChar2, newStat2])
                                .then(() => {
                                    profile.save()
                                    console.log(profile)
                                })
                        })

                    })
                })
            })

    })
})
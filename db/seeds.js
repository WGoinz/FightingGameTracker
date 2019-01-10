const Character = require('../models/Character')
const Profile = require('../models/Profile')
const Stats = require('../models/Stats')

const newStat = new Stats({
    tournamentName: "Kumite in Tennessee 2017",
    wins: 5,
    losses: 1,
    matches: 6,
    victoryPercentage: 83
})

const newStat2 = new Stats({
    tournamentName: "Kumite in Tennessee 2018",
    wins: 5,
    losses: 5,
    matches: 10,
    victoryPercentage: 50
})

const newStat3 = new Stats({
    tournamentName: "Kumite in Tennessee 2019",
    wins: 5,
    losses: 0,
    matches: 5,
    victoryPercentage: 100
})

const newStat4 = new Stats({
    tournamentName: "Kumite in Tennessee 2019",
    wins: 10,
    losses: 0,
    matches: 10,
    victoryPercentage: 100
})

const newStat5 = new Stats({
    tournamentName: "Kumite in Tennessee 2019",
    wins: 10,
    losses: 20,
    matches: 30,
    victoryPercentage: 33
})

const newChar = new Character({
    name: "Ibuki",
    archetype: "Offensive",
    characterImg: "https://i.imgur.com/kiJDFsA.jpg",
    stamina: 950,
    stats: [newStat]
})

const newChar2 = new Character({
    name: "Ryu",
    archetype: "Balanced",
    characterImg: "https://i.imgur.com/EuDyMPK.jpg",
    stamina: 1000,
    stats: [newStat2]
})

const newChar3 = new Character({
    name: "Bison",
    archetype: "Defensive",
    characterImg: "https://i.imgur.com/HOkEbgl.jpg",
    stamina: 1000,
    stats: [newStat3]
})

const newChar4 = new Character({
    name: "E Honda",
    archetype: "Defensive",
    characterImg: "https://i.imgur.com/G7Cc0lE.png",
    stamina: 1100,
    stats: [newStat4]
})

const newChar5 = new Character({
    name: "Akuma",
    archetype: "Offensive",
    characterImg: "https://i.imgur.com/TEZku9F.jpg",
    stamina: 900,
    stats: [newStat5]
})

const newProfile = new Profile({
    username: "Ryu",
    profilePic: "https://media1.giphy.com/media/3oz8xyCpOResKKsoXm/giphy.gif?cid=3640f6095c36127075417646671b2ba8",
    slogan: "The answer lies in the heart of battle",
    email: "ryu@capcom.com",
    characters: [newChar, newChar2]
})

const newProfile2 = new Profile({
    username: "Yung Damage",
    profilePic: "https://media0.giphy.com/media/N2NRguA7ByoSI/giphy.gif?cid=3640f6095c3612a05a307a4d553aa49a",
    slogan: "The answer lies in the heart of battle",
    email: "yungdamage@capcom.com",
    characters: [newChar3, newChar4]
})

const newProfile3 = new Profile({
    username: "Destroyer of Worlds",
    profilePic: "https://media0.giphy.com/media/xT1XGCiATaxXxW7pp6/giphy.gif?cid=3640f6095c3612f74c49714359f37e2c",
    slogan: "The answer lies in the heart of battle",
    email: "yungdamage@capcom.com",
    characters: [newChar5]
})
Profile.remove({})
    .then(() => Character.remove({}))
    .then(() => Stats.remove({}))
    .then(() => Stats.insertMany([newStat, newStat2, newStat3, newStat4, newStat5]))
    .then(() => Character.insertMany([newChar, newChar2, newChar3, newChar4, newChar5]))
    .then(() => newProfile.save())
    .then(() => newProfile2.save())
    .then(() => newProfile3.save())
    .then(() => {
        console.log("Seeds file finished loading")
    })




// Stats.deleteMany({}).then(() => {
//     Character.deleteMany({}).then(() => {
//         Profile.deleteMany({})
//             .then(() => {
//                 return Profile.create({
//                     username: "Ryu",
//                     profilePic: "https://i.imgur.com/cvpuu7I.png",
//                     slogan: "The answer lies in the heart of battle",
//                     email: "ryu@capcom.com",
//                     characters: []
//                 }).then((profile) => {
//                     const newChar = Character.create({
//                         name: "Ibuki",
//                         archetype: "Offensive",
//                         stamina: 950,
//                         stats: []
//                     }).then((character) => {
//                         profile.characters.push(character)

//                     })
//                     const newChar2 = Character.create({
//                         name: "Ryu",
//                         archetype: "Balanced",
//                         stamina: 1000,
//                         stats: []
//                     }).then((character) => {
//                         profile.characters.push(character)
//                     }).then((stat) => {
//                         const newStat = Stats.create({
//                             tournamentName: "Kumite in Tennessee",
//                             wins: 5,
//                             losses: 1,
//                             matches: 6,
//                             victoryPercentage: 83
//                         }).then((stat) => {
//                             profile.characters[0].stats.push(stat)
//                         })

//                         const newStat2 = Stats.create({
//                             tournamentName: "Kumite in Tennessee",
//                             wins: 5,
//                             losses: 5,
//                             matches: 10,
//                             victoryPercentage: 50
//                         }).then((stat) => {
//                             profile.characters[1].stats.push(stat)
//                         })
//                         Promise.all([newChar, newStat], [newChar2, newStat2])
//                             .then(() => {
//                                 profile.save()
//                                 console.log(profile)
//                             })
//                     })
//                 }).then(() => {
//                     return Profile.create({
//                         username: "Yung Damage",
//                         profilePic: "https://i.imgur.com/cvpuu7I.png",
//                         slogan: "The answer lies in the heart of battle",
//                         email: "yungdamage@capcom.com",
//                         characters: []
//                     }).then((profile) => {
//                         const newChar = Character.create({
//                             name: "Ibuki",
//                             archetype: "Offensive",
//                             stamina: 950,
//                             stats: []
//                         }).then((character) => {
//                             profile.characters.push(character)

//                         })
//                         const newChar2 = Character.create({
//                             name: "Ryu",
//                             archetype: "Balanced",
//                             stamina: 1000,
//                             stats: []
//                         }).then((character) => {
//                             profile.characters.push(character)
//                         }).then((stat) => {
//                             const newStat = Stats.create({
//                                 tournamentName: "Kumite in Tennessee",
//                                 wins: 5,
//                                 losses: 1,
//                                 matches: 6,
//                                 victoryPercentage: 83
//                             }).then((stat) => {
//                                 profile.characters[0].stats.push(stat)
//                             })

//                             const newStat2 = Stats.create({
//                                 tournamentName: "Kumite in Tennessee",
//                                 wins: 5,
//                                 losses: 5,
//                                 matches: 10,
//                                 victoryPercentage: 50
//                             }).then((stat) => {
//                                 profile.characters[1].stats.push(stat)
//                             })
//                             Promise.all([newChar, newStat], [newChar2, newStat2])
//                                 .then(() => {
//                                     profile.save()
//                                     console.log(profile)
//                                 })
//                         })

//                     })
//                 })
//             })

//     })
// })
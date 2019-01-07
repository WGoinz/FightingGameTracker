const express = require('express')
const router = express.Router()
const characterController = require('../controllers/characterController')
const profileController = require('../controllers/profileController')
const statsController = require('../controllers/statsController')

router.use(express.static('public'))

router.get('/', profileController.index)

router.get('/:id/character', characterController.index)




module.exports = router
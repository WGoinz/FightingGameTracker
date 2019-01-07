const express = require('express')
const router = express.Router()
const characterController = require('../controllers/characterController')
const profileController = require('../controllers/profileController')
const statsController = require('../controllers/statsController')

router.get('/', profileController.index)


module.exports = router
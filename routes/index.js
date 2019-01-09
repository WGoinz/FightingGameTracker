const express = require('express')
const router = express.Router()
const characterController = require('../controllers/characterController')
const profileController = require('../controllers/profileController')
const statsController = require('../controllers/statsController')

router.use(express.static('public'))

router.get('/', profileController.index)
router.post('/', profileController.create)
router.get('/new', profileController.new)
router.get('/:id', profileController.show)
router.get('/:id/edit', profileController.edit)
router.patch('/:id', profileController.update)
router.delete('/:id', profileController.delete)


router.get('/:id/characters/', characterController.index)
router.post('/:id/characters/', characterController.create)
router.get('/:id/characters/new', characterController.new)
router.get('/:id/characters/:charactedId', characterController.show)






module.exports = router
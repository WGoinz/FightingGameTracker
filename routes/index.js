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
// router.get('/:id/edit', profileController.edit)
// router.patch('/:id', profileController.update)
// router.delete('/:id', profileController.delete)


router.get('/:id/character', characterController.index)




module.exports = router
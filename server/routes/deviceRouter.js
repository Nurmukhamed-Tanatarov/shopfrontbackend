const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/login', deviceController.getAll)
router.get('/:id', deviceController.getone)

module.exports = router
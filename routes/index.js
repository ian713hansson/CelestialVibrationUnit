const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the root.'))

router.post('/modules', controllers.createModule)

router.get('/modules', controllers.getAllModules)

module.exports = router
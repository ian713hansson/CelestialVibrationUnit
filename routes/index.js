const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the root.'))

router.post('/modules', controllers.createModule)

router.get('/modules', controllers.getAllModules)

router.get('/modules/:id', controllers.getModuleById)

router.put('/modules/:id', controllers.updateModule)

router.delete('/modules/:id', controllers.deleteModule)

module.exports = router
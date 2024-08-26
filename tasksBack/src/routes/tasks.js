const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/', TaskController.create)
router.get('/', TaskController.getAll)
router.get('/:_id', TaskController.getById)
router.put('/completed/:_id', TaskController.update)
router.put('/title/:_id', TaskController.updateTitle)
router.delete('/:_id', TaskController.deleteTask)

module.exports = router

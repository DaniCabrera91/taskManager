const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/', TaskController.create);
router.get('/', TaskController.getAll);
router.get('/:taskId', TaskController.getById)
router.put('/:taskId', TaskController.updateTask)
router.delete('/:taskId', TaskController.delete)

module.exports = router
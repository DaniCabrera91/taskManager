const Task = require('../models/Tasks')

const TaskController = {
    async create(req, res) {
        try {
            const task = await Task.create(req.body)
            res.status(201).send(task)
        } catch (error) {
            res.status(400).send({ message: error })
        }
    },
    async getAll(req, res) {
        try {
            const tasks = await Task.find()
            res.status(200).send(tasks)
        } catch (error) {
            res.status(500).send({ message: 'algo ha fallado en el servidor', error })
        }
    },
    async getById(req, res) {
        try {
            const task = await Task.findById(req.params._id)
            if (!task) {
                return res.status(404).send({ message: 'Task no encontrada' })
            }
            res.status(200).send(task)
        } catch (error) {
            res.status(500).send({ message: 'No encontrado', error })
        }
    },
    async update(req, res) {
        try {
            const paramsId = req.params._id
            const task = await Task.findById(paramsId)

            if (!task) {
                return res.status(404).send({ message: 'Task no encontrada con ese id' })
            }

            task.completed = !task.completed
            await task.save()

            res.status(200).send({ message: 'Task completada', task })
        } catch (error) {
            res.status(400).send({ message: 'no se ha podido actualizar el estado', error })
        }
    },
    async updateTitle(req, res) {
        try {
            const task = await Task.findById(req.params._id)

            if (!task) {
                return res.status(404).send({ message: 'Task no encontrada con ese id' })
            }

            task.title = req.body.title || task.title
            await task.save()

            res.status(200).send({ message: 'Título actualizado correctamente', task })
        } catch (error) {
            res.status(400).send({ message: 'no se ha podido actualizar el título', error })
        }
    },
    async deleteTask(req, res) {
        try {
            const task = await Task.findByIdAndDelete(req.params._id)
            if (!task) {
                return res.status(404).send({ message: 'Task no encontrada' })
            }
            res.status(200).send({ message: 'Task eliminada con éxito' })
        } catch (error) {
            res.status(500).send({ message: 'error', error })
        }
    },
}

module.exports = TaskController

const Task = require('../models/Tasks');

const TaskController = {
    async create(req, res) {
        try {
            const task = await Task.create({ ...req.body, completed: false });
            res.status(201).json({ message: 'Task created successfully', task });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    },

    async getAll(req, res) {
        try {
            const tasks = await Task.find();
            res.status(200).json({ message: 'Tasks retrieved successfully', tasks });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    },

    async getById(req, res) {
        try {
            const task = await Task.findById(req.params._id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json({   
 message: 'Task retrieved successfully', task });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    },

    async updateTask(req, res) {
        try {
            const task = await Task.findByIdAndUpdate(
                req.params._id,
                { title: req.body.title },
                { new: true }
            );
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json({ message: 'Task updated successfully', task });
        } catch (error)   
 {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    },

    async delete(req, res) {
        try {
            const task = await Task.findByIdAndDelete(req.params._id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json({   
 message: 'Task deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error',   
 error });
        }
    },
};

module.exports = TaskController
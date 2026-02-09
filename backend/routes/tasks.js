import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// GET ALL TASK (UNIFIED STREAM)
// PASS User ID in the query URL (e.g., ?userId=123)
router.get('/', async (req, res) => {
    try {
        const userId = req.query.userId;

        const tasks = await Task.find({
            $or: [
                { owner: userId },
                { sharedWith: userId }
            ]
        }).sort({ createdAt: -1 });

        res.status(200).json(tasks);
    } catch(err) {
        res.status(500).json(err);
    }
});

// CREATE TASK
router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    } catch(err) {
        res.status(500).json(err);
    }
});

// UPDATE STATUS (Move from todo -> done)
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(task);
    } catch(err) {
        res.status(500).json(err);
    }
});

// DELETE TASK
router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json('Task deleted');
    } catch(err) {
        res.status(500).json(err);
    }
});

export default router;

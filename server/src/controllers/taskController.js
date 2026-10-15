import Task from '../models/Task.js';

export async function createTask(req, res) {
  try {
    const { title, description } = req.body;

    if (typeof title !== 'string' || !title.trim()) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const task = await Task.create({ title, description });
    return res.status(201).json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}

export async function getTasks(_req, res) {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    return res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
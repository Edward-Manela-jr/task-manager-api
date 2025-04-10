const express = require('express');
const router = express.Router();
// const task = require('../models/tasks'); // Import the Task model
const tasks = require('../models/tasks');
// Test Route
router.get('/manela', (req, res) => {
    res.send('API is running...');
});

// Route to Add a Task to the Database
router.post('/addtodb', async (req, res) => {
    console.log(req.body);
    
    try {
        const { id, title, description, status } = req.body;

        // Create a new task instance
        const taskData = new tasks({
            id,
            title,
            description,
            status,
        });

        // Save the task to the database
        const savedData = await taskData.save();

        // Send a success response
        res.status(201).json({ message: 'Task added successfully', task: savedData });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Failed to add task' });
    }
});


// Get all tasks
router.get('/retrieve', async (req, res) => {
  try {
    const taskData = await tasks.find();
        console.log(taskData);
    res.status(200).json(taskData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching taskData', error: error.message });
  }
});


router.delete('/post/delete/:id', async (req, res) => {
    try {
      const taskId = req.params.id;
      await tasks.findOneAndDelete({ id: taskId }); // Delete task by ID
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  });




module.exports = router;
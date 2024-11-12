const router = require('express').Router();
const { createTask, fetchAllTasks, updateTasks, updateTaskById, deleteTasks, deleteTaskById} = require('../Controllers/TaskController');

//to get all the tasks
router.get('/', fetchAllTasks)

//to create a task
router.post('/', createTask);

//to update a task
router.put('/:id', updateTaskById);

//to delete a task
router.delete('/:id', deleteTaskById);

module.exports = router;
const express = require('express');
const tasksDb = require('./tasksModel.js')

const router = express.Router();

router.get('/', (req, res) => {
    tasksDb.getTasks()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/:id', (req, res) => {
    tasksDb.getTasksByProjectId(req.params.id)
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.post('/:id', (req, res) => {
    const taskPost = req.body;
    taskPost.project_id = req.params.id
    console.log(taskPost)
    tasksDb.postTask(taskPost)
        .then(results => {
            res.status(200).json(results)
        })
        .then(error => {
            res.status(500).json(error)
        })
});

module.exports = router;
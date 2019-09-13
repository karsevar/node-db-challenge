const express = require('express');
const tasksDb = require('./tasksModel.js')

const router = express.Router();

router.get('/', (req, res) => {
    tasksDb.getTasks()
        .then(results => {
            const newResults = results.map(result => {
                if (result.completed === null || result.completed === 0) {
                    return {...result, completed: false}
                } else {
                    return {...result, completed: true}
                }
            })

            res.status(200).json(newResults)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/:id', validateProjectId, (req, res) => {
    tasksDb.getTasksByProjectId(req.params.id)
        .then(results => {
            const newResults = results.map(result => {
                if (result.completed === null || result.completed === 0) {
                    return {...result, completed: false}
                } else {
                    return {...result, completed: true}
                }
            })

            res.status(200).json(newResults)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.post('/:id', validateProjectId, (req, res) => {
    const newTask = req.body;
    newTask.project_id = req.params.id;

    tasksDb.postTask(newTask)
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

//middleware 
function validateProjectId(req, res, next) {
    tasksDb.getProjectById(req.params.id)
        .then(results => {
            console.log(results)
            if(results.length > 0) {
                next();
            } else {
                res.status(400).json({message: 'invalidate project id'})
            }
        })
}

module.exports = router;
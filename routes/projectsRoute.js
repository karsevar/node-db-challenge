const express = require('express');
const projectsDb = require('./projectsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    projectsDb.getProjects()
        .then(results => {
            console.log(results)
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
            res.status(500)
        })
});

router.post('/', (req, res) => {
    projectsDb.postProject(req.body) 
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(results)
        })
})

module.exports = router;
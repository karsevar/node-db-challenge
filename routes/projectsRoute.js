const express = require('express');
const projectsDb = require('./projectsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    projectsDb.getProjects()
        .then(results => {
            res.status(200).json(results)
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
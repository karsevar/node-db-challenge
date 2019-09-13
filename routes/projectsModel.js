const db = require('../data/db-config.js');

function getProjects() {
    return db('projects') 
}

function postProject(projectObject) {
    return db('projects').insert(projectObject)
}

module.exports = {getProjects, postProject}
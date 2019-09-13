const db = require('../data/db-config.js');

function getTasks() {
    return db('tasks') 
}

function getTasksByProjectId(project_id) {
    return db('tasks')
            .where({project_id})
}

function postTask(taskPost) {
    return db('tasks').insert(taskPost)
}

module.exports = {getTasks, getTasksByProjectId, postTask}
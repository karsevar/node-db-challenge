const db = require('../data/db-config.js');

function getTasks() {
    return db('tasks')
        .join('projects', 'tasks.project_id', '=', 'projects.id')
        .select('tasks.id', 'tasks.description', 'tasks.completed', 'tasks.notes', 'projects.project_name') 
}

function getTasksByProjectId(project_id) {
    return db('tasks')
            .where({project_id})
            .select('tasks.id', 'tasks.description', 'tasks.completed', 'tasks.notes') 
}

function postTask(taskPost) {
    return db('tasks').insert(taskPost)
}

module.exports = {getTasks, getTasksByProjectId, postTask}
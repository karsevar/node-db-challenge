const db = require('../data/db-config.js');

function getTasks() {
    return db('tasks as t')
        .join('projects as p', 't.project_id', '=', 'p.id')
        .select('t.id', 't.description', 't.completed', 't.notes', 'p.project_name', 'p.description') 
}

function getTasksByProjectId(project_id) {
    return db('tasks')
            .where({project_id})
            .join('projects', 'tasks.project_id', '=', 'projects.id')
            .select('tasks.id', 'tasks.description', 'tasks.completed', 'tasks.notes', 'projects.project_name', 'projects.project_description') 
}

function postTask(taskPost) {
    return db('tasks').insert(taskPost)
}

module.exports = {getTasks, getTasksByProjectId, postTask}
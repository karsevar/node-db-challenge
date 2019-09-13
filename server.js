const express = require('express');
const taskRoute = require('./routes/tasksRoute.js');
const projectsRoute = require('./routes/projectsRoute.js');
const resourcesRoute = require('./routes/resourcesRoute.js');

const server = express();

server.use(express.json());

server.use('/api/tasks', taskRoute);

server.use('/api/projects', projectsRoute);

server.use('/api/resources', resourcesRoute);

server.use('/', (req, res) => {
    res.send(`<h2>Root Route is Printing something!!!</h2>`)
});

module.exports = server;
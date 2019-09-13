const db = require('../data/db-config.js');

function getResources() {
    return db('resources') 
}

function postResource(resourceObject) {
    return db('resources').insert(resourceObject)
}

module.exports = {getResources, postResource};
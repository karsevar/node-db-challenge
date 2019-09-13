
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'finish sprint', project_description: 'This sprint is more time consuming'},
        {project_name: 'create machine learning algorithm', completed: true},
        {project_name: 'sleep more', project_description: 'feeling sleepy everyday'}
      ]);  
};

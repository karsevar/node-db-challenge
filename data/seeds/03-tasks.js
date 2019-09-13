
exports.seed = function(knex) {
      return knex('tasks').insert([
        {description: 'sleep at 8pm', notes: 'need more sleep', project_id: 3, resource_id: 3, completed: true},
        {description: 'eat by 5pm', notes: 'eating late keeps me up', project_id: 3, resource_id: 1, completed: true},
        {description: 'be less nervous', project_id: 3, resource_id: 4, completed: true},
        {description: 'become faster at coding', project_id: 1, resource_id: 2, completed: true},
        {description: 'install all packages', project_id: 1, resource_id: 5, completed: true},
        {description: 'become a faster planner', project_id: 1, resource_id: 4, completed: true}
      ]);
};


exports.seed = function(knex) {
      return knex('tasks').insert([
        {description: 'sleep at 8pm', notes: 'need more sleep', project_id: 3, resource_id: 3},
        {description: 'eat by 5pm', notes: 'eating late keeps me up', project_id: 3, resource_id: 1},
        {description: 'be less nervous', project_id: 3, resource_id: 4},
        {description: 'become faster at coding', project_id: 1, resource_id: 2},
        {description: 'install all packages', project_id: 1, resource_id: 5},
        {description: 'become a faster planner', project_id: 1, resource_id: 4, completed: true}
      ]);
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('resources').insert([
        {resource_name: 'talk with parents', description: 'ask for advice'},
        {resource_name: 'get new computer'},
        {resource_name: 'eat healthier food', description: 'eating too much junk food'},
        {resource_name: 'talk with professional', description: 'ask for advice'},
        {resource_name: 'knex'},
        {resource_name: 'npm'},
        {resource_name: 'nodemon'}
      ]);
};

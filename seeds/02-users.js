
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'darkcrow', password:'awesome', email:'sharingan@gmail.com', first_name:'itachi', last_name:"uchiha"},
        { username: 'thebeast', password: 'fabulous', email:'beasttitan@gmail.com', first_name:'zeke', last_name:'yaeger' },
      ]);
    });
};

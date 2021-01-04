
exports.up = function(knex) {
    return knex.schema
    .createTable('guides', tbl => {
        tbl.increments();
        tbl.string("title", 128)
            .notNullable()
        tbl.string("body")
            .notNullable()
        tbl.integer("likes")
            .unsigned()
            .defaultTo(0)
        tbl.integer("user_id")
            .references('id')
            .inTable("users")

    })
}


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('guides')
  
};

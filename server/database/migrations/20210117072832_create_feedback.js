exports.up = function(knex) {
    return knex.schema.createTable('feedbacks', function(table){
        table.increments();
        table.string('id_company').notNullable();
        table.text('pros').notNullable();
        table.text('contras').notNullable();
        table.text('comentario').notNullable();
        table.string('cargo').notNullable();
        table.integer('nota').notNullable();
        table.foreign('id_company').references('id').inTable('companies');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('feedbacks');
};

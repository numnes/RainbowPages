exports.up = function(knex) {
    return knex.schema.createTable('companies', function(table){
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('endereco').notNullable();
        table.text('descricao').notNullable();
        table.integer('nota').notNullable();
        table.boolean('vip').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('companies');
};

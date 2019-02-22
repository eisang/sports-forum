exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.string("name");
    table.string("nickname");
    table.text("favorite_game");
    table.string("location");
    table.text("img_url");
    table.text("content");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};

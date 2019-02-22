const knex = require("../db/knex");

module.exports = {
  getAll(req, res) {
    knex("users").then(users => res.json(users));
  },
  getOne(req, res) {
    knex("users")
      .where("id", req.params.id)
      .then(post => res.json(post));
  },
  addOne(req, res) {
    knex("users")
      .insert(req.body)
      .returning("*")
      .then(newUser => res.json(newUser));
  },
  updateOne(req, res) {
    knex("users")
      .where("id", req.params.id)
      .update(req.body)
      .returning("*")
      .then(updatedUser => res.json(updatedUser));
  },
  deleteUser(req, res) {
    knex("users")
      .where("id", req.params.id)
      .del()
      .returning("*")
      .then(deletedUser => res.json(deletedUser));
  }
};

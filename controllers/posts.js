const knex = require("../db/knex");

module.exports = {
  getAll(req, res) {
    knex("posts").then(posts => res.json(posts));
  },
  getOne(req, res) {
    knex("posts")
      .where("id", req.params.id)
      .then(post => res.json(post));
  },
  addOne(req, res) {
    knex("posts")
      .insert(req.body)
      .returning("*")
      .then(newPost => res.json(newPost));
  },
  updateOne(req, res) {
    knex("posts")
      .where("id", req.params.id)
      .update(req.body)
      .returning("*")
      .then(updatedpost => res.json(updatedpost));
  },
  deletePosts(req, res) {
    knex("posts")
      .where("id", req.params.id)
      .del()
      .returning("*")
      .then(deletedpost => res.json(deletedpost));
  }
};

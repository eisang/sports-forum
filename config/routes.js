const users = require("../controllers/users.js");

module.exports = function(app) {
  //users routes
  app.get("/users", users.getAll);
  app.get("/users/:id", users.getOne);
  app.post("/users", users.addOne);
  app.patch("/users/:id", users.updateOne);
  app.delete("/users/:id", users.deleteUser);
};

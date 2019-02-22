exports.seed = function(knex, Promise) {
  return knex("posts")
    .del()
    .then(function() {
      return knex("posts").insert([
        {
          user_name: "flavor",
          rating: 4,
          content:
            "Water resistant and has extra insulation. Also has a slightly longer fit in order to protect your body from the sharp, winter weather.Suitably designed for skiing and snowboarding"
        }
      ]);
    });
};

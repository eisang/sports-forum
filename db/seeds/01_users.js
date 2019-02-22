exports.seed = function(knex, Promise) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          name: "Chris",
          nickname: "Bamby",
          favorite_game: "against Bradford fc",
          location: "madrid",
          img_url: "https://pbs.twimg.com/media/Dv70OfqXQAElAVo.jpg",
          content:
            "All  I want for christmas is Cleveland Browns winning the superBowl"
        },
        {
          name: "Shelly",
          nickname: "Legolas",
          favorite_game: "the gunners walloping the eagles",
          location: "london",
          img_url:
            "https://static.adweek.com/adweek.com-prod/wp-content/uploads/files/news_article/thierry-henry-redbulls-hed-2013.jpg",
          content: "Todays game is full of skinheads"
        },
        {
          name: "Billy",
          nickname: "Bruv",
          favorite_game: "against cleveland browns 5 years ago",
          location: "coepnhagen",
          img_url: "https://pbs.twimg.com/media/Dv70OfqXQAElAVo.jpg",
          content: "this game  against Barcelona Fc is gonna be lit "
        }
      ]);
    });
};

const router = require("express").Router();

const moviesServices = require("./movies.services");

router.get("/movies", moviesServices.getAllMovies);

router.get("/movies/:id", moviesServices.getMoviesById);

router.post("/movies", moviesServices.postNewMovie);

router.delete("/movies/:id", moviesServices.deleteDeleteMoviesById);

router.put("/movies/:id", moviesServices.putAllMovies);

module.exports = router;

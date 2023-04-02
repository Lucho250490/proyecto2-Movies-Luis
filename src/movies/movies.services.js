const moviesControllers = require("./movies.controllers");

const getAllMovies = (req, res) => {
    moviesControllers
        .findAllMovies()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            err.status(400).json({ message: err });
        });
};

const getMoviesById = (req, res) => {
    const id = Number(req.params.id);
    moviesControllers
        .findMoviesId(id)
        .then((data) => {
            if (!data) {
                return res
                    .status(404)
                    .json({ message: `user whit ad: ${id} not found` });
            }

            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err });
        });
};

const postNewMovie = (req, res) => {
    const newMovie = req.body;
    moviesControllers
        .createMovies(newMovie)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            err.status(400).json({ message: err });
        });
};

const deleteDeleteMoviesById = (req, res) => {
    const id = Number(req.params.id);
    moviesControllers
        .deleteMoviesById(id)
        .then((data) => {
            if (!data) {
                return res
                    .status(404)
                    .json({ message: `movie with id:${id} not find` });
            }

            res.status(200).json(data);
        })
        .catch((err) => {
            err.status(404).json({ message: err });
        });
};

const putAllMovies = (req, res) => {
    const newMovie = req.body;
    const id = req.params.id;
    moviesControllers
        .updateMovies(newMovie, id)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            err.status(400).json({ message: err });
        });
};

module.exports = {
    getAllMovies,
    getMoviesById,
    postNewMovie,
    deleteDeleteMoviesById,
    putAllMovies,
};

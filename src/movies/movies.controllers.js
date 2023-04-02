const moviesDb = [
    {
        id: 1,
        title: "Avenger Endgame",
        description: "The revenge of the avengers",
        year: "2019",
        director: "Anthony Russo",
    },

    {
        id: 2,
        title: "the 100",
        description: "the last beings humans",
        year: "2008",
        director: "Jason Rothenberg",
    },
];

let movieId = 3;

const findAllMovies = async () => {
    return moviesDb;
};

// esta funcion genera una busqueda dependiendo del Id

const findMoviesId = async (id) => {
    const data = moviesDb.find((movie) => movie.id === id);

    return data;
};

const createMovies = async (newMovie) => {
    const newMovies = {
        id: movieId++,
        title: newMovie.title || "Forest Comp",
        description: newMovie.description || "It's a movie of superation",
        year: newMovie.year || "2000",
        director: newMovie.director || "Robert  D'Nilo",
    };
    moviesDb.push(newMovies);
    return newMovies;
};

const deleteMoviesById = async (id) => {
    const data = moviesDb.splice(id - 1, id);
    return data;
};

const updateMovies = async (newMovie, id) => {
    const changeMovies = {
        id: movieId++,
        title: newMovie.title || "Forest Comp",
        description: newMovie.description || "It's a movie of superation",
        year: newMovie.year || "2000",
        director: newMovie.director || "Robert  D'Nilo",
    };

    const data = moviesDb.find((item) => item.id === id);

    //const newData = moviesDb.splice(data.id - 1, 1, changeMovies);

    return data
    
};

module.exports = {
    findAllMovies,
    findMoviesId,
    createMovies,
    deleteMoviesById,
    updateMovies,
};

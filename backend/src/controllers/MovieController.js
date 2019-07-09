import Movie from '../models/Movie';

class MovieController {
  async index(req, res) {
    const movies = await Movie.find().sort('-createdAt');

    return res.json(movies);
  }

  async store(req, res) {
    const { imdbID } = req.body;
    const movie = await Movie.create({
      imdbID,
    });

    req.io.emit('movie', movie);

    return res.json(movie);
  }
}

export default new MovieController();

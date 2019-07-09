import Movie from '../models/Movie';

class MovieController {
  async index(req, res) {
    const movies = await Movie.find().sort('-createdAt');

    return res.status(200).json(movies);
  }

  async store(req, res) {
    const { imdbID } = req.body;
    const movie = await Movie.create({
      imdbID,
    });

    req.io.emit('movie', movie);

    return res.status(200).json(movie);
  }

  async delete(req, res) {
    Movie.findByIdAndRemove(req.params.id, err => {
      if (err) return res.status(500).send(err);

      return res.status(200).json({ message: 'Movie successfully deleted' });
    });
  }
}

export default new MovieController();

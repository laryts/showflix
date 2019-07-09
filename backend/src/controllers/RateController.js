import Movie from '../models/Movie';

class RateController {
  async store(req, res) {
    const movie = await Movie.findById(req.params.id);

    movie.rating = req.body.rating;

    await movie.save();

    req.io.emit('rating', movie);

    return res.json(movie);
  }
}

export default new RateController();

import Movie from '../models/Movie';

class LikeController {
  async store(req, res) {
    const movie = await Movie.findById(req.params.id);

    movie.like = !movie.like;

    await movie.save();

    req.io.emit('like', movie);

    return res.json(movie);
  }
}

export default new LikeController();

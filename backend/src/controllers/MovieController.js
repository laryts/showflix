import Movie from '../models/Movie';

class MovieController {
  async index(req, res) {
    const movies = await Movie.find().sort('-createdAt');

    return res.status(200).json(movies);
  }

  async store(req, res) {
    // console.log('TCL: req', req.body);
    // const movieExists = Movie.find().where({ imdbID: req.body.imdbID });
    // console.log('TCL: MovieController -> store -> movieExists', movieExists);
    // if (movieExists) {
    //   return res.status(501).json({ message: 'Movie already added' });
    // }
    const { imdbID, poster, title } = req.body;
    const movie = await Movie.create({
      imdbID,
      poster,
      title,
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

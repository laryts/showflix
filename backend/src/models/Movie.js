import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema(
  {
    imdbID: {
      type: String,
      unique: true,
    },
    poster: String,
    title: String,
    like: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Movie', MovieSchema);

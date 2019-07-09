import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema(
  {
    imdbID: String,
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

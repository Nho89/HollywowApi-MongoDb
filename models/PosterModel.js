import mongoose from 'mongoose';

const PosterSchema = new mongoose.Schema({
 name: String,
 director: String,
 year: Number,
 imageUrl: String,
});

const Poster = mongoose.model('Poster', PosterSchema);

export default Poster;
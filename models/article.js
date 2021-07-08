const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
    trim: true,
    maxLength: [50, 'Max length is 30 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  website: {
    type: String,
    trim: true,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Not a valid website url',
    ],
  },
  email: {
    type: String,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Not a valid website url'],
  },
  location: {
    type: { type: String, enum: ['Point'] },
    coordinates: { type: [Number], index: ['2dsphre'] },
    formatAddress: String,
    street: String,
    city: String,
    zipcode: String,
    country: String,
  },
  colors: {
    type: [String],
    required: true,
    enum: ['White', 'Green', 'Blue'],
  },
  averageRating: { type: String },
  averageCost: Number,
  available: { type: Boolean, default: false },
  assistance: { type: Boolean, default: false },
  guarantee: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', ArticleSchema);

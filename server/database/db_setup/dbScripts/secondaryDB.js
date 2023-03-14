import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [{
    feature: String,
    value: String,
    }],

})

// skus is supposed to be an object but since there can be multiple object keys that aren't consistent
// we can use JSON stringified form of the skus object instead most likely.
const stylesSchema = new mongoose.Schema({
  product_id: String,
  results: [{
    style_id: Number,
    name: String,
    original_price: String,
    sale_price: String,
    default?: String,
    photos: [{
      thumbnail_url: String,
      url: String,
    }],
    skus: String,
  }]
})
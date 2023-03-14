const pg = require('pg');
const db = new pg.Pool({
  user: 'tigerhong',
  host: 'localhost',
  database: 'products',
  password: '',
  port: 5432,
})


/* ------------------------------ DB Method Functions | Mock API ------------------------------ */

// product query
let productQuery = (product_id, callback) => {
  // make the db query to product table with product id
}

// features query
let featuresQuery = (product_id, callback) => {
  // make the db query to features table with product id
}

// styles query
let stylesQuery = (product_id, callback) => {
  // make the db query to styles table with product id
}

// skus query
let skusQuery = (product_id, callback) => {
  // make the db query to skus table with product id
}


// photos query
let photosQuery = (product_id, callback) => {
  // make the db query to photos table with product id
}

module.exports.productQuery = productQuery;
module.exports.featuresQuery = featuresQuery;
module.exports.stylesQuery = stylesQuery;
module.exports.skusQuery = skusQuery;
module.exports.photosQuery = photosQuery;
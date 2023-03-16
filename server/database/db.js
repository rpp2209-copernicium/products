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
  db.query(`SELECT product.id, name, slogan, description, category, default_price, ARRAY_AGG(json_build_object('feature', features.feature, 'value', features.value)) features FROM product INNER JOIN features on product.id = product_id where product.id = ${product_id} GROUP BY product.id`, (err, res) => {
    if (err) {
      console.log('error', err);
    } else {
    callback(res.rows[0])
    }
  })
}

// features query
let featuresQuery = (product_id, callback) => {
  // make the db query to features table with product id
  db.query(`Select feature, value from features where product_id = ${product_id}`, (err, res) => {
    if (err) {
      console.log('error', err);
    } else {
      callback(res.rows);
    }
  })
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
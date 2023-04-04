require('dotenv').config();
const pg = require('pg');
const db = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_HOST)
})

/* ------------------------------ DB Method Functions | Mock API ------------------------------ */

// product query with id query
let productsQuery = (product_id, callback) => {

  // make the db query to product table with product id, join with features tables as an array
  db.query(`SELECT product.id, name, slogan, description, category, default_price,
  ARRAY_AGG(json_build_object('feature', features.feature, 'value', features.value)) features FROM product
  INNER JOIN features ON product.id = product_id where product.id = ${product_id} GROUP BY product.id`, (err, res) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, res.rows[0])
    }
  })
}


// styles query
let stylesQuery = (product_id, callback) => {
  // make the db query to styles table with product id

  // each styles table needs photos and skus along with it
  // query should join the tables together

  /* CURRENT!!! Works with all photos being added to the style at the moment, but we need
  to add the skus somehow which is worth looking into. Then we need to add our iteration function too... */
  db.query(
    `SELECT styles.style_id, name, sale_price, original_price, default_style,
    ARRAY_AGG(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url)) photos,
    JSON_OBJECT_AGG(skus.id, JSON_BUILD_OBJECT('quantity', skus.quantity, 'size', skus.size)) skus
    FROM styles
    LEFT JOIN photos ON styles.style_id = photos.styleid
    LEFT JOIN skus ON styles.style_id = skus.styleid
    WHERE productid = ${product_id} GROUP BY styles.style_id
    ORDER BY style_id ASC`, (err, res) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, res.rows);
      }
  })
}

module.exports.productsQuery = productsQuery;
module.exports.stylesQuery = stylesQuery;
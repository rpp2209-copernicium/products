const pg = require('pg');
const path = require('path');
const db = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'products',
  password: '',
  port: 5432,
})

var productFile = path.resolve(__dirname, '../ETL_DATA/product.csv');
var stylesFile = path.resolve(__dirname, '../ETL_DATA/styles.csv');
var photosFile = path.resolve(__dirname, '../ETL_DATA/photos.csv');
var featuresFile = path.resolve(__dirname, '../ETL_DATA/features.csv');
var skusFile = path.resolve(__dirname, '../ETL_DATA/skus.csv');


// id,product_id,feature,value
// id,productId,name,sale_price,original_price,default_style
// id,styleId,url,thumbnail_url
// id,styleId,size,quantity

db.connect( (err, client, done) => {
  client.query(`COPY product(id, name, slogan, description, category, default_price) FROM '${productFile}' DELIMITER ',' CSV HEADER`, (err, res) => {
    if (err) {
      console.log('failed to copy', err);
    } else {
      console.log('product data inserted!');
      client.query(`COPY styles (id, productId, name, sale_price, original_price, default_style) FROM '${stylesFile}' DELIMITER ',' CSV HEADER`, (err, res) => {
        if (err) {
          console.log('failed to copy', err);
        } else {
          console.log('styles data inserted!');
          client.query(`COPY photos (id, styleId, url, thumbnail_url) FROM '${photosFile}' DELIMITER ',' CSV HEADER`, (err, res) => {
            if (err) {
              console.log('failed to copy', err);
            } else {
              console.log('photos data inserted!');
              client.query(`COPY features (id, product_id, feature, value) FROM '${featuresFile}' DELIMITER ',' CSV HEADER`, (err, res) => {
                if (err) {
                  console.log('failed to copy', err);
                } else {
                  console.log('features data inserted!');
                  client.query(`COPY skus (id, styleId, size, quantity) FROM '${skusFile}' DELIMITER ',' CSV HEADER`, (err, res) => {
                    if (err) {
                      console.log('failed to copy', err);
                      done();
                    } else {
                      console.log('skus data inserted!');
                      done();
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
})


require('dotenv').config();
const pg = require('pg');
const db = new pg.Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_HOST)
})

// DROP table script if need to reset tables

db.query("DROP TABLE IF EXISTS product CASCADE", (err, res) => {
  if (err) {
    console.log('cannot drop table')
  } else {
    console.log('product table dropped!');
    db.query("DROP TABLE IF EXISTS styles CASCADE", (err, res) => {
      if (err) {
        console.log('cannot drop table')
      } else {
        console.log('styles table dropped!')
        db.query("DROP TABLE IF EXISTS photos CASCADE", (err, res) => {
          if (err) {
            console.log('cannot drop table')
          } else {
            console.log('photos table dropped!')
            db.query("DROP TABLE IF EXISTS skus CASCADE", (err, res) => {
              if (err) {
                console.log('cannot drop table')
              } else {
                console.log('skus table dropped!')
                db.query("DROP TABLE IF EXISTS features CASCADE", (err, res) => {
                  if (err) {
                    console.log('cannot drop table')
                  } else {
                    console.log('features table dropped!')
                  }
                });
              }
            });
          }
        })
      }
    });
  }
});

// create all TABLES HERE.
// create PRODUCT table here
db.query("CREATE TABLE product(id INT, name text, slogan text, description text, category text, default_price TEXT, PRIMARY KEY (id))", (err, res) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log('product table created successfully!');
    // id,product_id,feature,value
    // create FEATURES table here
    db.query("CREATE TABLE features(id INT, product_id INT, feature TEXT, value TEXT, PRIMARY KEY(id), CONSTRAINT fk_features FOREIGN KEY(product_id) REFERENCES product(id))", (err, res) => {
      if (err) {
        console.log('error!!', err);
      } else {
        console.log('features table created successfully!');
      }
    })
    // id,productId,name,sale_price,original_price,default_style
    // create STYLES table here
    db.query("CREATE TABLE styles(style_id INT, productId INT, name TEXT, sale_price TEXT, original_price TEXT, default_style TEXT, PRIMARY KEY(style_id), CONSTRAINT fk_product FOREIGN KEY(productId) REFERENCES product(id))", (err, res) => {
      if (err) {
        console.log('error!!', err);
      } else {
        console.log('styles table created successfully!');
        // id,styleId,url,thumbnail_url
        // create photos table here
        db.query("CREATE TABLE photos(id INT, styleId INT, url TEXT, thumbnail_url TEXT, PRIMARY KEY(id), CONSTRAINT fk_photos FOREIGN KEY(styleId) REFERENCES styles(style_id))", (err, res) => {
          if (err) {
            console.log('error!!', err);
          } else {
            console.log('photos table created successfully!');
            //id,styleId,size,quantity
            //create SKUS table here
            db.query("CREATE TABLE skus(id INT, styleId INT, size TEXT, quantity TEXT, PRIMARY KEY(id), CONSTRAINT fk_skus FOREIGN KEY(styleId) REFERENCES styles(style_id))", (err, res) => {
              if (err) {
                console.log('error!!', err);
                db.end();
              } else {
                console.log('skus table created successfully!');
                db.end();
              }
            })
          }
        })
      }
    })
  }
})









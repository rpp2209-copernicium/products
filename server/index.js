// main server file.

// dependencies
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// API helper functions
const api = require('./database/db.js');
// body parser for incoming requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());



// router methods
app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/products', (req, res) => {
  res.send('ALL Products Page Here')
})

app.get('/products/:product_id', (req, res) => {

  // req.param gives us object of form {"product_id":"1"}
  var product_id = Number.parseInt(req.params.product_id);

  // call on helper functions to make our database queries for product information
    // product info includes queries to tables of product, features
    // example api.productQuery;
    api.productsQuery(product_id, (err, result) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(result);
      }
    })
  })

app.get('/products/:product_id/styles', (req, res) => {

  var product_id = Number.parseInt(req.params.product_id);
  // we want to obtain the styles for the above product
  // call on helper functions to make our database queries for product styles information
    // styles includes queries to tables of styles, photos, skus
    api.stylesQuery(product_id, (err, result) => {
      if (err) {
        res.status(400).send(err)
      } else {
      styles = {};
      styles['product_id'] = req.params.product_id;
      styles['results'] = result;
      res.status(200).send(styles);
      }
    })

})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
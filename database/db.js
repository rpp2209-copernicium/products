const pg = require('pg');
const db = new pg.Pool({
  user: 'tigerhong',
  host: 'localhost',
  database: 'products',
  password: '',
  port: 5432,
})

// create new table when running db.js
db.query("CREATE TABLE product(id INT, name text, slogan text, description text, category text, default_price text, PRIMARY KEY (id))", (err, res) => {
    if (err) {
      console.log('error', err);
      db.end();
    } else {
      console.log('table created successfully!', res);
      db.end();
    }
  }
)
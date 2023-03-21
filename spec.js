// test suite test
const pg = require('pg');
const db = new pg.Pool({
  user: 'tigerhong',
  host: 'localhost',
  database: 'products',
  password: '',
  port: 5432,
})

describe('initial test suite check', () => {
  test('should add up', () => {
    var sum = function (num) {
      return 1 + num;
    }
    expect(sum(3)).toBe(4)
  })
})

describe('database testing', () => {
  test('should return something', () => {
    db.query('select count (*) from product', (err, res) => {
      if (err) {
        console.log('error lol', err);
      } else {
       expect(res.rows[0].count).toBe('1000011');
      }
    })
  })
})
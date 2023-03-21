// test suite test
const pg = require('pg');
const api = require('./server/database/db.js')
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

  test('should pass test', () => {
    return (
      db.query('select count (*) from product')
      .then ( (result) => {
        expect(result.rows[0].count).toBe('1000011');
      })
    )
  })

  test('product query', () => {
    return (
      api.productsQuery('1000000', (res) => {
        expect(res.id).toBe(1000000)
        expect(res.name).toBe('Noemi Coat')
        expect(res.features.length).toBe(2)
      })
    )
  })

  test('styles query', () => {
    return (
      api.stylesQuery('1000000', (res) => {
        expect(Array.isArray(res)).toBe(true);
        expect(res[0]['default_style']).toBe('1');
      })
    )
  })

})
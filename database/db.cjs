// db.cjs
const { Pool } = require('pg');

// Your database configuration and code here
const pool = new Pool({
  user: 'jwe',
  host: 'localhost',
  database: 'mydatabase',
  password: 'Jwe1989!',
  port: 5432,
});

module.exports = pool;
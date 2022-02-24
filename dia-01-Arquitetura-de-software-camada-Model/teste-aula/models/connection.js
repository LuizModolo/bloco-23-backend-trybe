const mysql = require('mysql2/promise')

const connection = mysql.createPool({
  user: 'root',
  password: '123456Ab@',
  host: 'localhost',
  database: 'model_example'
})

module.exports = connection;
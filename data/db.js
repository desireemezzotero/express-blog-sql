const mysql = require('mysql2')

/* connessioni */
const connection = mysql.createConnection({
  host: '127.0.0.1' , 
  user:'root',
  password: 'rootroot',
  database: 'db_blog',
})

/* in caso di errore */
connection.connect((err) => {
  if(err) throw err
  console.log('mysql è connesso')
})

module.exports = connection
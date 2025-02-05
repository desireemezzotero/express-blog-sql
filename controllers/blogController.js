const connection = require('../data/db')
const notFound = require('../middlewares/notFound')

const index = (req,res) => {
  const sql = 'SELECT * FROM posts'

  connection.query(sql, (err,results) => {
    if(err) return res.status(500).json({err:'query al database fallita'})
    res.json(results)
  })
}

const show = (req,res) => {
  const sql = 'SELECT * FROM posts WHERE id = ? '
   
  connection.query(sql,[id], (err, results) => {
    if(err) return res.status(500).json({err:'query al database fallita'})
    if (results.length === 0) return res.status(404).json({err:'post non trovato'})
    let post = results[0]
    res.json(post)
  })
}

const store = (req,res) => {
  res.send('creazione di un nuovo blog')
}

const update = (req,res) => {
  const id = req.params.id
  res.send(`modifico il blog con id: ${id}`)
}

const modify = (req,res) => {
  const id = req.params.id
  res.send(`modifico il blog con id:${id}`)
}

const destroy = (req,res) => {
  const id = req.params.id
  const sql = 'DELETE FROM posts WHERE id = ?'
  connection.query(sql, [id], (err,results) => {
    if (err) return res.status(500).json({error: 'eliminazione del blog '})
    res.sendStatus (204) 
  })
}

module.exports = {
 index,
 show,
 store,
 update,
 modify,
 destroy
}
const connection = require('../data/db')

const index = (req,res) => {
  const sql = 'SELECT * FROM posts'

  connection.query(sql, (err,results) => {
    if(err) return res.status(500).json({err:'query al database fallita'})
    res.json(results)
  })
}

const show = (req,res) => {
  const id = req.params.id
  res.send(`dettaglio del blog con id: ${id}`)
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
  res.send(`elimino il blog con id ${id}`)
}

module.exports = {
 index,
 show,
 store,
 update,
 modify,
 destroy
}
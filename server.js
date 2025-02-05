const express = require ('express');
const app = express ();
const port = 3000;
const errorsHandler = require ('./middlewares/errorsHandler');
const notFound= require('./middlewares/notFound');
const blogsRouter = require('./routes/blogs')

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res) => {
  res.send('server del blog')
})

app.get('/posts', blogsRouter)

/* uso il middleware per la gestione del'errore */
app.use(errorsHandler)

/* uso il middleware per la gestione dell'errore Not Found */
app.use(notFound)

/* metto in ascolto la porta */
app.listen(port, () => {
  console.log(`sono in ascolto alla porta ${port}`)
})


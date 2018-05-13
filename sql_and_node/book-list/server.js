const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const {Client} = require('pg');
const methodOverride = require('method-override');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('static'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('home',{title: 'Home Page'});
});
app.get('/list', (req, res) => {
  const client = new Client();
  client.connect().then(() => {
    return client.query('SELECT * FROM books;');
  }).then((results) => {
    res.render('list', {title: 'List Page', books: results})
  }).catch((error) => {res.status(400).render('errors', {status: '400'})})
});
app.get('/book/:id', (req, res) => {
  const client = new Client();
  client.connect().then(() => {
    return client.query(`SELECT * FROM books WHERE book_id=${req.params.id};`)
  }).then((result) => {
    res.render('book', {book: result, title: 'Single Book'})
  }).catch((error) => {
    res.status(400).render('error', {status: '400'})
  });
});

app.get('/books', (req, res) => {
  res.render('add-book',{title: 'Add A New Book'});
});

app.get('*', (req, res) => {
  res.status(404).render('errors', {status: '400'});
});
app.post('/books', (req, res) => {
  const client = new Client();
  client.connect().then(() => {
    const sql = 'INSERT INTO books (title, authors)VALUES($1, $2)';
    const params = [req.body.title, req.body.authors]
    return client.query(sql, params);
  }).then((result) => {
    console.log('Result', result);
    res.redirect('/list');
  }).catch((error) => {res.status(400).render('errors', {status: '400'})})
});
app.delete('/books/:id', (req, res) => {
  const client = new Client();
  client.connect().then(() => {
  return client.query(`DELETE FROM books WHERE book_id=${req.params.id}`)
}).then((result) => {
  res.redirect('/list')
}).catch((error) => {
  res.status(400).render('errors', {status: '400'});
  });
});
app.put('/books/:id', (req, res) => {
  const client = new Client();
  client.connect().then(() => {
    return client.query(`UPDATE books SET title = '${req.body.title}', authors = '${req.body.authors}' WHERE book_id=${req.params.id}`)
  }).then(() => {
    res.redirect('/list')
  }).catch((error) => {
    console.log(error);
    res.send(error)
  })
});

app.listen(PORT, (req, res) => {
  console.log(`Server is Listening on port: ${PORT}`);
});

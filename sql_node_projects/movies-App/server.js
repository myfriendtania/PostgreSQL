// import express from our dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
// initialize the app
const app = express();

// middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// static files
app.use(express.static('public'));

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;
// tell the app to listen on that particular port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Our index route!
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// import our movie routes & tell the app to use them
const movieRoutes = require('./routes/movie-routes');
app.use('/movies', movieRoutes);

// Error handler!
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
const express = require('express');
const movieRoutes = express.Router();

const moviesController = require('../controllers/movies-controller');


movieRoutes.get('/', moviesController.index);
movieRoutes.post('/', moviesController.create);

movieRoutes.get('/:id', moviesController.show);
movieRoutes.put('/:id', moviesController.update);
movieRoutes.delete('/:id', moviesController.delete);

module.exports = movieRoutes;
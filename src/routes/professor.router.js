const { getAll, create, getOne, remove, update } = require('../controllers/professor.controllers');
const express = require('express');

const professorRouter = express.Router();

professorRouter.route('/')
    .get(getAll)
    .post(create);

professorRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = professorRouter;
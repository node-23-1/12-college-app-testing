const { getAll, create, getOne, remove, update } = require('../controllers/course.controllers');
const express = require('express');

const courseRouter = express.Router();

courseRouter.route('/')
    .get(getAll)
    .post(create);

courseRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = courseRouter;
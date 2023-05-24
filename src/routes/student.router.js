const { getAll, create, getOne, remove, update } = require('../controllers/student.controllers');
const express = require('express');

const studentRouter = express.Router();

studentRouter.route('/')
    .get(getAll)
    .post(create);

studentRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = studentRouter;
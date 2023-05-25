const { getAll, create, getOne, remove, update, setStudentProfessors, setStudentCourses } = require('../controllers/student.controllers');
const express = require('express');

const studentRouter = express.Router();

studentRouter.route('/')
    .get(getAll)
    .post(create);

studentRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

studentRouter.route('/:id/professors')
    .post(setStudentProfessors);

studentRouter.route('/:id/courses')
    .post(setStudentCourses);

module.exports = studentRouter;
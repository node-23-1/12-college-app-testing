const express = require('express');
const studentRouter = require('./student.router');
const courseRouter = require('./course.router');
const professorRouter = require('./professor.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/students', studentRouter);
router.use('/courses', courseRouter);
router.use('/professors', professorRouter);

module.exports = router;
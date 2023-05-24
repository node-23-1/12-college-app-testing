const express = require('express');
const studentRouter = require('./student.router');
const courseRouter = require('./course.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/students', studentRouter);
router.use('/courses', courseRouter);

module.exports = router;
const request = require('supertest');
const app = require('../app');
require('../models');

let courseId;

test('POST /courses should create one course', async () => {
    const course = {
        name: "Programación",
        credits: 5
    }
    const res = await request(app).post('/courses').send(course);
    courseId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
});

test('GET /courses should return all courses', async () => {
    const res = await request(app).get('/courses');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].students).toBeDefined();
});

test('PUT /courses/:id should update one course', async () => {
    const courseUpdated = {
        name: "Programacion actualizada"
    }
    const res = await request(app)
        .put(`/courses/${courseId}`)
        .send(courseUpdated);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(courseUpdated.name);
});

test('DELETE /courses/:id should delete one course', async () => {
    const res = await request(app).delete(`/courses/${courseId}`);
    expect(res.status).toBe(204);
});

const request = require('supertest');
const app = require('../app');
const Professor = require('../models/Professor');
const Course = require('../models/Course');
require('../models');

let studentId;

test("POST /students should create one student", async() => {
    const student = {
        name: "Anderson",
        birthday: "2002-04-03",
        program: "Ingeniería informática"
    }
    const res = await request(app)
        .post('/students')
        .send(student);
    studentId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
})

test("GET /students should get all students", async() => {
    const res = await request(app).get('/students');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].professors).toBeDefined();
})

test("PUT /students/:id should update one student", async() => {
    const updatedStudent = {
        name: "Anderson updated"
    }
    const res = await request(app)
        .put(`/students/${studentId}`)
        .send(updatedStudent);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(updatedStudent.name);
})


test("POST /students/:id/courses should set the student courses", async() => {
    const course = await Course.create({
        name: "Calculo",
        credits: 5
    })
    const res = await request(app)
        .post(`/students/${studentId}/courses`)
        .send([course.id]);
    await course.destroy();
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
})


test('POST /students/:id/professors should set the student professors', async () => {
    const professor = await Professor.create({
        name: "Juan Manzanera"
    })
    const res = await request(app)
        .post(`/students/${studentId}/professors`)
        .send([professor.id]);
    await professor.destroy();
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
});

test("DELETE /students/:id should delete one student", async() => {
    const res = await request(app).delete('/students/'+studentId);
    expect(res.status).toBe(204);
})

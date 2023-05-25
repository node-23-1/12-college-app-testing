const request = require('supertest');
const app = require('../app');
require('../models');

let professorId;

test("POST /professors should create one professor", async() => {
    const professor = {
        name: "John Doe",
    }
    const res = await request(app)
        .post('/professors')
        .send(professor);
    professorId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
})

test("GET /professors should get all professors", async() => {
    const res = await request(app).get('/professors');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].students).toBeDefined();
})

test("PUT /professors/:id should update one professor", async() => {
    const updatedprofessor = {
        name: "John Doe updated"
    }
    const res = await request(app)
        .put(`/professors/${professorId}`)
        .send(updatedprofessor);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(updatedprofessor.name);
})

test("DELETE /professors/:id should delete one professor", async() => {
    const res = await request(app).delete('/professors/'+professorId);
    expect(res.status).toBe(204);
})


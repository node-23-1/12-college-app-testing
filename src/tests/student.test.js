const request = require('supertest');
const app = require('../app');

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

test("DELETE /students/:id should delete one student", async() => {
    const res = await request(app).delete('/students/'+studentId);
    expect(res.status).toBe(204);
})

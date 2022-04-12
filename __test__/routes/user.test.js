const request = require('supertest');

const app = require('../../src/app');

test('Deve listar todos os usuários', () => {
    return request(app).get('/users').then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
test('Deve inserir usuário com sucesso', () => {
    const email = `${Date.now()}@gmail.com`;
    return request(app).post('/users').send({ name: 'Lia Schotte', email, password: '12345' })
        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('Lia Schotte');
            expect(res.body.password).toBe('12345');
            expect(res.body).toHaveProperty('email');
        });
});
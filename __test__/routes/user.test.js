const request = require('supertest');

const app = require('../../src/app');


/* beforeAll(async () => {
    //await db_Knex.connect();
});
afterAll(async () => {
    //await setupDbDisconnect();
});
afterEach(async () => {
    //await setupCollectionClean();
}); */

test('Deve listar todos os usuários', async () => {
    const result = await request(app).get('/users');
    expect(result.status).toBe(200);
    expect(result.body.length).toBeGreaterThan(0);
});
test('Deve inserir usuário com sucesso', async () => {
    const email = `${Date.now()}@gmail.com`;
    const result = await request(app).post('/users').send({ name: 'Lia Schotte', email, password: '12345' });
    expect(result.status).toBe(201);
    expect(result.body.name).toBe('Lia Schotte');
    expect(result.body.password).toBe('12345');
    expect(result.body).toHaveProperty('email');
});
test('Não deve inserir usuário sem nome', async () => {
    const result = await request(app).post('/users').send({ email: 'lisa@gmail.com', password: '12345' });
    expect(result.status).toBe(400);
    expect(result.body.error).toBe('Nome é um atributo obrigatório!')

});
test('Não deve inserir usuário sem email', async () => {
    const result = await request(app).post('/users').send({ name: 'Lia Schotte', password: '12345' });
    expect(result.status).toBe(400);
    expect(result.body.error).toBe('E-mail é um atributo obrigatório!');
});
const app = require('express')();
const consign = require('consign');

consign({ verbose: false }).include('src/config/middlewares.js').into(app);

app.get('/', (req, res) => {
    res.status(200).send();
});

app.get('/users', (req, res) => {
    const users = [{ name: "Luana Schotte", email: "lua@gmail.com" }];
    
    res.status(200).json(users);
});

app.post('/users', (req, res) => {
    res.status(201).json(req.body);
});

module.exports = app;
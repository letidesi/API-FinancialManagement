// TODO Aprendendo sobre as principais assertivas do Jest

test('O resultado precisa ter o valor igual a nulo', () => {
    let number = null;
    expect(number).toBeNull();
});

test('O resultado não é um valor nulo', () => {
    let number = 12;
    expect(number).not.toBeNull();
});
test('O resultado precisa ter os valores iguais', () => {
    let number = 20;
    expect(number).toBe(20);
});
test('O resultado precisa ter os valores iguais', () => {
    let number = 40;
    expect(number).toEqual(40);
});
test('O resultado precisa ter o valor maior que 10', () => {
    let number = 15;
    expect(number).toBeGreaterThan(10);
});
test('O resultado precisa ter o valor menor que 15', () => {
    let number = 5;
    expect(number).toBeLessThan(15);
});

// TODO Aprendendo a trabalhar com objetos

test('O resultado precisa retornar a propriedade name do objeto e o valor', () => {
    const obj = { name: "Letícia", email: "leh@gmail.com" };

    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Letícia');
    expect(obj.name).toBe('Letícia');
});
test('O resultado precisa retornar o objeto igual ao objeto2', () => {

    const obj = { name: 'Letícia', email: 'leh@gmail.com' };
    const obj2 = { name: 'Letícia', email: 'leh@gmail.com' };

    expect(obj).toEqual(obj2);
});
test('O resultado precisa retornar o objeto igual ao objeto', () => {

    const obj = { name: 'Letícia', email: 'leh@gmail.com' };

    expect(obj).toBe(obj);
});
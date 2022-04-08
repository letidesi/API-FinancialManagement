module.exports = {
    test: {
        client: 'pg',
        version: '27.5.1',
        connection: {
            host: 'localhost',
            user: 'postgres',
            'password': 'leticiadesiderio',
            database: 'financial',
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};
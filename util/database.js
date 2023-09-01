const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.PG_DB='crud',
    process.env.PG_USER='postgres',
    process.env.PG_PASSWORD='postgres',
    {
        host: process.env.PG_HOST,
        dialect: 'postgres',
    }
);

module.exports = sequelize;
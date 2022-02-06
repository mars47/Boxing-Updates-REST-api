const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize  = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: 'mysql'
})

const modelDefiners = [
    require('./models/belt.model'),
    require('./models/boxer.model'),
    require('./models/event.model'),
    require('./models/organization.model'),
    require('./models/weightClass.model')
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

module.exports = sequelize;
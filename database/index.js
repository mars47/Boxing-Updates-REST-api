const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize  = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: 'mysql'
})

const createModels = [
 
    require('./models/belt.model'),
    require('./models/boxer.model'),
    require('./models/event.model'),
    require('./models/organization.model'),
    require('./models/weightClass.model'),
    require('./models/country.model')
];

for (const createModel of createModels) {
	createModel(sequelize);
}

const models = sequelize.models 

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });

module.exports = sequelize;
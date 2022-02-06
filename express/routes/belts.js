const { models } = require('../../sequelize');

async function getAll(req, res) {
	const belts = await models.belts.findAll();
	res.status(200).json(belts);
};

function something(res) {
	res.status(200)
}

module.exports = {
	getAll
};
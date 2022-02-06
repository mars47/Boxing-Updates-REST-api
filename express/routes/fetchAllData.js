const { models } = require('../../sequelize');

async function getAll(req, res) {

    let results = {}
    const belts = await models.Belts.findAll();
    const boxers = await models.Boxers.findAll();
    const events = await models.Events.findAll();
    const organizations = await models.Organization.findAll();
    const weightClasses =  await models.WeightClass.findAll(); 

    results["belts"] = belts
    results["boxers"] = boxers
    results["events"] = events
    results["organizations"] = organizations
    results["weightClasses"] = weightClasses

    res.status(200).json(results);
};

module.exports = {
    getAll
};
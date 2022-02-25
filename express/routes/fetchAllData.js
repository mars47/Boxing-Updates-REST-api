const { models } = require('../../database');

async function getAll(req, res) {
    
    let results = {}
    const belts = await models.Belts.findAll();
    const boxers = await models.Boxers.findAll(
        {
            include: [ {model: models.Belts, as: 'belts'} ],
            raw: false
        }
    );
    const events = await models.Events.findAll();
    const organizations = await models.Organization.findAll();
    const weightClasses =  await models.WeightClass.findAll(); 
    const country =  await models.Country.findAll(); 

    results["belts"] = belts
    results["boxers"] = boxers
    results["events"] = events
    results["organizations"] = organizations
    results["weightClasses"] = weightClasses
    results["country"] = country

    res.status(200).json(results);
};

module.exports = {
    getAll
};
const app = require('./express/app');
const sequelize = require('./database');
const serverless = require('serverless-http')
const PORT = 3004;

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
}

async function init() {
    try {

        await assertDatabaseConnectionOk();
        console.log(`Starting Sequelize + Express example on port ${PORT}...`);
        app.listen(PORT, () => {
            console.log(`Express server started on port ${PORT}. Try some routes, such as 'http://localhost:3004/data'.`);
        })
    } catch (error) {
        console.log(`***ERROR*** ${error.message}`)
        //next(error);
    }
}

init();
//module.exports.handler = serverless(app)
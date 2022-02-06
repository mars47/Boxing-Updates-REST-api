const express = require('express')
const bodyParser = require('body-parser');
const app = express()
//const morgan = require('morgan')
//app.use(morgan('short'))

const routes = {
	allData: require('./routes/fetchAllData')
	// // Add more routes here...
	// items: require('./routes/items'),
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// We create a wrapper to workaround async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	}
}

app.get(`/data`, makeHandlerAwareOfAsyncErrors(routes.allData.getAll));

//app.get(`/api/allDataModels`, makeHandlerAwareOfAsyncErrors(routes.allData.getAll));

app.get("/", (req, res) => {
	console.log("Respoding to route")
	res.send("Hello from root")
})

module.exports = app;
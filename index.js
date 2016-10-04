const express = require('express');
const chefSchema = require('./schemas/chef.schema');
const mealSchema = require('./schemas/meal.schema');
const { graphql } = require('graphql');
const bodyParser = require('body-parser');

const app  = express();
const PORT = 3000;

startServer();

/**
 * Start the Server
 */
function startServer () {
    const server = app.listen(PORT, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('GraphQL listening at http://%s:%s', host, port);
    });

    // Parse POST body as text
    app.use(bodyParser.text({ type: 'application/graphql' }));

    // Configure the app routes
    configureRoutes();
}

/**
 * Configure all routes that can be used
 */
function configureRoutes () {
    app.post('/chef', handleChefGraphRequest);
    app.post('/meal', handleMealGraphRequest);
}

/**
 *
 * @param {Object} request
 * @param {Object} response
 */
function handleChefGraphRequest (request, response) {
    graphql(chefSchema, request.body)
        .then(result => response.send(JSON.stringify(result)));
}

function handleMealGraphRequest (request, response) {
    graphql(mealSchema, request.body)
        .then(result => response.send(JSON.stringify(result)));
}
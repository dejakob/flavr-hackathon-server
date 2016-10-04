/**
 *
 * @name Meal Schema
 *
 */

// Import Graph QL methods / props
const graphQl = require('graphql/type');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} = graphQl;

// Import the meal type
const Meal = require('../types/meal.type');

// Import mock data
const meals = require('../data/meals.json');

// Create the chef schema
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            byChef: {
                type: new GraphQLList(Meal),
                resolve (chef) {
                    return meals.filter(meal => meal.id === chef);
                }
            },
            all: {
                type: new GraphQLList(Meal),
                resolve () {
                    return meals;
                }
            }
        }
    })
});

// Export chef schema
module.exports = schema;

/**
 * @name MealsCollection
 * @property {GraphQLList.<Meal>} meals
 * @property {GraphQLInt} count
 */

// Import GraphQL
const graphQl = require('graphql/type');
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} = graphQl;

// Import Meal type
const Meal = require('./meal.type');

// Create a MealsCollection GraphQL Object type
const MealsCollectionType = new GraphQLObjectType({
    name: 'MealsCollection',
    fields: {
        meals: { type: new GraphQLList(Meal) },
        count: { type: GraphQLInt }
    }
});

// Export the type
module.exports = MealsCollectionType;
